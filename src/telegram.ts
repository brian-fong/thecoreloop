// Dependencies
require('dotenv').config();
import fs from "fs";
import path from "path";
import { LAG } from "./LAG";
const input = require("input");
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { LogLevel } from "telegram/extensions/Logger";

// Initialize pretty logger
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Telegram API keys
const API_ID = Number(process.env.TELEGRAM_API_ID)!;
const API_HASH = process.env.TELEGRAM_API_HASH!;

export interface TelegramIndex {
  [key: number]: number;
}

// Create Telegram client
export async function createTelegramClient(string_session: string = ""): Promise<TelegramClient> {
  // Instantiate <TelegramClient> object
  const client: TelegramClient = new TelegramClient(
    new StringSession(string_session),
    API_ID,
    API_HASH,
    { connectionRetries: 5 },
  );

  // If string_session is undefined/invalid, then prompt user for Telegram credentials (terminal-input)
  if (string_session == "" || !client) {
    await client.start({
      phoneNumber: async () => await input.text("Phone Number (include +1 for US): "),
      password: async () => await input.password("Password: "),
      phoneCode: async () => await input.text("Authentication Code (sent via Telegram): "),
      onError: (error: Error) => plog.error(`Error: ${error}`, 0, 2),
    });
  }

  // Connect to Telegram
  try {
    await client.connect();
    // plog.log(`Session String: "${client.session.save()}"`, 0, 2);
  } catch (error) {
    plog.error(`Something went wrong!`, 0, 1)
    plog.log(`${error}`, 1, 2);
  }

  // Disable Telegram logging
  const log_level: LogLevel = LogLevel.NONE;
  client.setLogLevel(log_level);

  return client;
}

// Read Telegram Index
export function readIndex(): TelegramIndex {
  // Filepath to Telegram index
  const FILEPATH_INDEX: string = path.join(__dirname, "../LAG/telegram-index.json");

  // Read Telegram indices
  const telegram_index: number[] = JSON.parse(fs.readFileSync(FILEPATH_INDEX, { encoding: "utf-8" }));
  return telegram_index;
}

// Check Telegram Index
export function checkIndex(telegram_index: TelegramIndex): number[] {
  // Define missing LAG numbers
  const MISSING_LAG_NUMBERS = [1, 2, 3, 56, 57, 58, 59, 60, 62];

  // Initialize missing LAG numbers array
  const missing_LAG_numbers: number[] = [];

  // Filepath to Telegram index
  const FILEPATH_INDEX: string = path.join(__dirname, "../LAG/telegram-index.json");

  // Read Telegram indices
  const latest_index: number = Number(Object.keys(telegram_index).slice(-1)[0]);
  const latest_LAG_number = telegram_index[latest_index];

  // Create number array 
  let number_array: number[] = [];
  for (let i = 1; i <= latest_LAG_number; i++) {
    number_array.push(i);
  }

  // Compare LAG posts to number array
  const LAG_index = Object.values(telegram_index);
  for (const number of number_array) {
    if (!LAG_index.includes(number) && !MISSING_LAG_NUMBERS.includes(number)) {
      missing_LAG_numbers.push(number);
    }
  }

  return missing_LAG_numbers;
}

// Update LAG index
export async function getIndex(client: TelegramClient, debug: boolean = false): Promise<TelegramIndex> {
  // Filepath to Telegram index
  const FILEPATH_INDEX: string = path.join(__dirname, "../LAG/telegram-index.json");

  // Initialize Telegram Index
  let telegram_index: TelegramIndex = {};
  try {
    // Read Telegram Index
    if (debug) plog.log(`\nReading Telegram Index JSON file . . . `, 1, 0);
    telegram_index = JSON.parse(fs.readFileSync(FILEPATH_INDEX, { encoding: "utf-8" }));
    if (debug) plog.done("Done", 0, 1);
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
    if (debug) plog.log(`Latest LAG post: #${latest_LAG_number}`, 1, 1);
  }

  // Iterate through Telegram messages
  let empty_message_count = 0;
  let message_id: number = latest_message_id+1;
  if (debug) plog.log(`Reading Telegram messages . . . `, 1, 1);
  while (empty_message_count < 10) {
    // Read Telegram message
    if (debug) plog.log(`Parsing message #${message_id} . . . `, 2, 0);
    const messages: string[] = await readMessages(client, "thecoreloop", [message_id]);
    if (messages.length > 0) {
      try {
        // Assign message variable
        const message: string = messages[0];

        // Instantiate <LAG> object
        const lag: LAG = new LAG(message, message_id);
        if (debug) plog.done(`LAG #${lag.number} found!`, 0, 1);

        // Assuming LAG post is valid, append message ID to Telegram index
        if (lag.number) telegram_index[message_id] = lag.number;
        
        // Write/update telegram-index.json file
        // plog.log(`Writing file: /${FILEPATH_INDEX.split("/").slice(-3).join("/")} . . . `, 3, 0);
        fs.writeFileSync(
          FILEPATH_INDEX,
          JSON.stringify(telegram_index, null, 2)
        );
        // plog.done(`Done`, 0, 1);

        // Write lag-###.json file
        const FILEPATH_POSTS_DIR: string = path.join(__dirname, "../LAG/posts/");
        const filename = `lag-${lag.number.toString().padStart(3, "0")}.json`;
        const filepath_lag_post = path.join(FILEPATH_POSTS_DIR, filename);
        // plog.log(`Writing file: /${filepath_lag_post.split("/").slice(-4).join("/")} . . . `, 3, 0);
        fs.writeFileSync(
          filepath_lag_post, 
          JSON.stringify(lag, null, 2)
        );
        // plog.done(`Done`, 0, 1);

        // Reset empty message count
        empty_message_count = 0;
      } catch (error: any) {
        if (debug) plog.error(error.message, 0, 1);
      }
    } else {
      // In case of empty message
      if (debug) plog.alert(`Empty message`, 0, 1);
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

