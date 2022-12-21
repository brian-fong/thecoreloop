// Dependencies
import fs from "fs";
import path from "path";
import { LAG } from "../LAG";
import { TelegramClient } from "telegram";
import { TelegramIndex, createTelegramClient, readIndex, checkIndex, updateIndex, readMessages } from "../telegram";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Filepaths 
const FILEPATH_INDEX: string = path.join(__dirname, "../../LAG/telegram-index.json");

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Telegram =====", 0, 2);

}

main()
  .then(() => process.exit(0));


