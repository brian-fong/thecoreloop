// Dependencies
import fs from "fs";
import path from "path";
import { LAG } from "../LAG";
import { TelegramClient } from "telegram";
import { createTelegramClient, readMessages } from "../telegram";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

// Filepaths 
const FILEPATH_POSTS_DIR: string = path.join(__dirname, "../../LAG/posts/");

async function main() {

}

main()
  .then(() => process.exit(0));


