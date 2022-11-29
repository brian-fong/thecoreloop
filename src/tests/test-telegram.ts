// Dependencies
import fs from "fs";
import path from "path";
import { LAG } from "../LAG";
import { TelegramClient } from "telegram";
import { createTelegramClient, readMessages } from "../telegram";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Filepaths 
const FILEPATH_INDEX: string = path.join(__dirname, "../../LAG/telegram-index.json");

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Telegram =====", 0, 2);

  // Read Telegram Index
  plog.log("Reading Telegram Index . . . ", 0, 0);
  const telegram_index: number[] = JSON.parse(fs.readFileSync(FILEPATH_INDEX, { encoding: "utf-8" }));
  plog.done("Done", 0, 1);

  // Console-log Telegram Index
  plog.log(`Telegram Index: ${telegram_index.length} entries`, 0, 1);
  plog.log(`[${telegram_index.join(", ")}]`, 0, 2);
  
  // Connect to Telegram
  plog.log("Connecting to Telegram . . . ", 0, 1);
  const client: TelegramClient = await createTelegramClient(string_session);
  plog.done(`Successfully connected!`, 0, 2);

  // Read Telegram messages
  plog.log("Reading Telegram messages . . . ", 0, 0);
  const messages: string[] = await readMessages(client, telegram_index);
  plog.done("Done", 0, 2);

  // Console-log Telegram messages
  plog.log("LAG Posts: ", 0, 1);
  for (let i = 0; i < messages.length; i++) {
    // Assign message and message ID
    const message: string = messages[i];
    const message_id: number = telegram_index[i];

    // Instantiate <LAG> object
    const lag: LAG = new LAG(message, message_id);
    plog.log(lag.heading, 1, 1);
  }
  plog.log("", 0, 1);
}

main()
  .then(() => process.exit(0));

