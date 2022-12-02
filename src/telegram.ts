// === Node Modules ===
require('dotenv').config();
import fs from "fs";
import path from "path";
const input = require("input");
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { LogLevel } from "telegram/extensions/Logger";

// === Local Modules ===
import { LAG } from "./LAG";
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// === Types ===
import { TelegramIndex } from "./types";

// === Telegram API keys ===
const API_ID: number = Number(process.env.TELEGRAM_API_ID)!;
const API_HASH: string = process.env.TELEGRAM_API_HASH!;

// Create <TelegramClient> object; requires Telegram user credentials 
export async function createTelegramClient(string_session: string = ""): Promise<TelegramClient> {
  // Instantiate <TelegramClient> object
  const client: TelegramClient = new TelegramClient(
    new StringSession(string_session),
    API_ID,
    API_HASH,
    { connectionRetries: 5 },
  );

  // If string_session is undefined/invalid, then prompt user 
  //   for Telegram credentials within the terminal
  if (string_session == "" || !client) {
    await client.start({
      phoneNumber: async () => await input.text("Phone Number (include +1 for US): "),
      password: async () => await input.password("Password: "),
      phoneCode: async () => await input.text("Authentication Code (sent via Telegram): "),
      onError: (error: Error) => plog.error(`Error: ${error}`, 0, 2),
    });
  }

  // Try connecting to Telegram
  try {
    await client.connect();
    
    // Optional: console-log StringSession to terminal
    // plog.log(`Session String: "${client.session.save()}"`, 0, 2);
  } catch (error) {
    plog.error(`Something went wrong!`, 0, 1)
    plog.log(`${error}`, 1, 2);
  }

  // Disable Telegram event logging
  const log_level: LogLevel = LogLevel.NONE;
  client.setLogLevel(log_level);

  return client;
}

// Read telegram-index.json file, returns <TelegramIndex> object
export function readIndex(filepath_index: string): TelegramIndex {
  let telegram_index: TelegramIndex = {};
  try {
    const telegram_index: TelegramIndex = JSON.parse(fs.readFileSync(filepath_index, { encoding: "utf-8" }));
  } catch (error: any) {
    if (error.code == "ENOENT") plog.alert(`ENOENT: telegram-index.json file not found`, 0, 1);
    else plog.error(`${error}`, 0, 1);
  }
  return telegram_index;
}

// Check telegram-index.json, returns array of missing LAG numbers
export function checkIndex(telegram_index: TelegramIndex): number[] {
  // These LAG numbers are not present or do not contain LAG content
  const EXCEPTIONS = [1, 2, 3, 56, 57, 58, 59, 60, 62];

  // Collect all LAG numbers
  const LAG_numbers = Object.values(telegram_index);
  // Assign latest LAG number
  const latest_LAG_number: number = Number(Object.values(telegram_index).slice(-1)[0]);

  // Create number array from 1 to latest LAG number (inclusive)
  const number_array: number[] = [];
  for (let i = 1; i <= latest_LAG_number; i++) number_array.push(i);
  
  // Initialize missing LAG numbers array
  const missing_LAG_numbers: number[] = number_array.filter(number => (!LAG_numbers.includes(number) && !EXCEPTIONS.includes(number)));

  return missing_LAG_numbers;
}

// Update LAG index
export async function getIndex(client: TelegramClient): Promise<TelegramIndex> {
  // Filepath to Telegram index
  const FILEPATH_INDEX: string = path.join(__dirname, "../LAG/telegram-index.json");

  // Initialize Telegram Index
  let telegram_index: TelegramIndex = {};
  try {
    // Read Telegram Index
    plog.log(`\nReading Telegram Index JSON file . . . `, 1, 0);
    telegram_index = JSON.parse(fs.readFileSync(FILEPATH_INDEX, { encoding: "utf-8" }));
    plog.done("Done", 0, 1);
  } catch (error: any) {
    if (error.code == "ENOENT") {
      plog.alert(`ENOENT: file not found`, 0, 1);
    } else plog.error(`${error}`, 0, 1);
  }

  // Obtain message IDs and sort in ascending order
  const message_ids: number[] = Object.keys(telegram_index).map(id => Number(id));
  message_ids.sort(function(a, b) {
    return a - b;
  });

  // Obtain LAG numbers and sort in ascending order
  const LAG_numbers: number[] = Object.values(telegram_index);
  LAG_numbers.sort(function(a, b) {
    return a - b;
  });

  // Assign latest message ID
  let latest_message_id: number = 0;
  if (message_ids.length > 0) {
    latest_message_id = message_ids[message_ids.length-1];
    const latest_LAG_number: number = telegram_index[latest_message_id];
    plog.log(`Latest LAG post: #${latest_LAG_number}`, 1, 1);
  }

  // Iterate through Telegram messages
  let empty_message_count = 0;
  let message_id: number = latest_message_id+1;
  plog.log(`Reading Telegram messages . . . `, 1, 1);
  while (empty_message_count < 10) {
    // Read Telegram message
    plog.log(`Parsing message #${message_id} . . . `, 2, 0);
    const messages: string[] = await readMessages(client, "thecoreloop", [message_id]);
    if (messages.length > 0) {
      try {
        // Assign message variable
        const message: string = messages[0];

        // Instantiate <LAG> object
        const lag: LAG = new LAG(message, message_id);
        plog.done(`LAG #${lag.number} found!`, 0, 1);

        // Assuming LAG post is valid, append message ID to Telegram index
        if (lag.number) telegram_index[message_id] = lag.number;
        
        // Write/update telegram-index.json file
        plog.log(`Updating Telegram Index . . . `, 3, 0);
        fs.writeFileSync(
          FILEPATH_INDEX,
          JSON.stringify(telegram_index, null, 2)
        );
        plog.done(`Done`, 0, 1);

        // Write lag-###.json file
        const FILEPATH_POSTS_DIR: string = path.join(__dirname, "../LAG/posts/");
        const filename = `lag-${lag.number.toString().padStart(3, "0")}.json`;
        const filepath_lag_post = path.join(FILEPATH_POSTS_DIR, filename);
        plog.log(`Writing file: /${filepath_lag_post.split("/").slice(-4).join("/")} . . . `, 3, 0);
        fs.writeFileSync(
          filepath_lag_post, 
          JSON.stringify(lag, null, 2)
        );
        plog.done(`Done`, 0, 1);

        // Reset empty message count
        empty_message_count = 0;
      } catch (error: any) {
        plog.error(error.message, 0, 1);
      }
    } else {
      // In case of empty message
      plog.alert(`Empty message`, 0, 1);
      empty_message_count++;
    }

    // Increment message ID index
    message_id++;
  }

  return telegram_index;
}

// Read Telegram message(s)
export async function readMessages(client: TelegramClient, channel: string, id_numbers: number[]): Promise<string[]> {
  // Construct array of <InputMessageID> objects representing Telegram message IDs
  let message_ids: Api.InputMessageID[] = id_numbers.map(id_number => new Api.InputMessageID({ id: id_number }));

  // Read Telegram messages
  // - TODO: Assign more specific type to response variable
  const response: any = await client.invoke(new Api.channels.GetMessages({ 
    channel: channel,
    id: message_ids,
  }));
  
  // Parse text content from Telegram messages
  // - TODO: Assign more specific type to message variable
  let messages: string[] = response.messages
    .map((message: any) => message.message || "")
    .filter((message: any) => message.length > 0);
  return messages;
}

// Edit a Telegram message
export async function editMessage(client: TelegramClient, channel: string, id_number: number, message: string): Promise<any> {
  let response: any = {};
  try {
    // Read Telegram messages
    // - TODO: Assign more specific type to response variable
    response = await client.invoke(new Api.messages.EditMessage({ 
      peer: channel,
      id: id_number,
      message: message,
    }));
  } catch (error) {
    throw error;
  }

  return response;
}

