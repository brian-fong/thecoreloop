// Dependencies
require('dotenv').config();
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

// Read Telegram messages
export async function readMessages(client: TelegramClient, id_numbers: number[]): Promise<string[]> {
  // Construct array of <InputMessageID> objects representing Telegram message IDs
  let message_ids: Api.InputMessageID[] = id_numbers.map(id_number => new Api.InputMessageID({ id: id_number }));

  // Read Telegram messages
  const channel_name: string = "thecoreloop";
  // - TODO: Assign more specific type to response variable
  const response: any = await client.invoke(new Api.channels.GetMessages({ 
    channel: channel_name,
    id: message_ids,
  }));
  
  // Parse text content from Telegram messages
  // - TODO: Assign more specific type to message variable
  let messages: string[] = response.messages
    .map((message: any) => message.message || "")
    .filter((message: any) => message.length > 0);
  return messages;
}

