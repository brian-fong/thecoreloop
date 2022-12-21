// === Node Modules ===
require('dotenv').config();
import fs from "fs";
import path from "path";
const input = require("input");
import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { LogLevel } from "telegram/extensions/Logger";

// === Local Modules ===
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// === Types ===
import { TelegramMessage } from "./types";

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

// Read Telegram message(s)
export async function readMessages(client: TelegramClient, channel: string, message_ids: number[]): Promise<TelegramMessage[]> {
  // Construct array of <InputMessageID> objects representing Telegram message IDs
  let id_objects: Api.InputMessageID[] = message_ids.map(message_id => new Api.InputMessageID({ id: message_id }));

  // Read Telegram messages
  // - TODO: Assign more specific type to response variable
  const response: any = await client.invoke(new Api.channels.GetMessages({ 
    channel: channel,
    id: id_objects,
  }));

  // Parse text content from non-empty Telegram messages
  // - TODO: Assign more specific type to message variable
  let messages_nonempty: string[] = response.messages
    .map((message: any) => message.message || "")
    .filter((message: any) => message.length > 0);

  // Parse message ID from non-empty Telegram messages
  // - TODO: Assign more specific type to message variable
  let message_ids_nonempty: number[] = response.messages 
    .filter((message: any) => message.message && message.message.length > 0)
    .map((message: any) => message.id);

  // Check if same number of nonempty messages and corresponding message IDs
  if (messages_nonempty.length != message_ids_nonempty.length) throw Error ("Differing number of messages and message IDs in readMessages() call");

  // Construct array of <TelegramMessage> objects 
  const messages: TelegramMessage[] = [];
  for (let i = 0; i < messages_nonempty.length; i++) {
    // Assign message text content and message ID
    const text: string = messages_nonempty[i];
    const id: number = message_ids_nonempty[i];

    // Instantiate <TelegramMessage> object
    const message: TelegramMessage = {
      text: text, 
      id: id,
    };
    messages.push(message);
  }

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

// Send a Telegram message 
export async function sendMessage(client: any, channel: string, message: string) {
  let response: any = {};
  try {
    // Read Telegram messages
    // - TODO: Assign more specific type to response variable
    response = await client.invoke(new Api.messages.SendMessage({ 
      peer: channel,
      message: message,
    }));
  } catch (error) {
    throw error;
  }

  return response;
}

export async function deleteMessages(client: TelegramClient, channel: string, id_numbers: number[]) {
  let response: any = {};
  try {
    // Read Telegram messages
    // - TODO: Assign more specific type to response variable
    response = await client.invoke(new Api.channels.DeleteMessages({ 
      channel: channel,
      id: id_numbers,
    }));
  } catch (error) {
    throw error;
  }

  return response;
}


