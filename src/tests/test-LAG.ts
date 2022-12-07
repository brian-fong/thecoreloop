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
  plog.log("===== Test: LAG =====", 0, 2);

  try {
    // Read Telegram Index
    plog.log("Reading Telegram Index . . . ", 0, 0);
    const telegram_index: TelegramIndex = readIndex();
    plog.done("Done", 0, 1);
    
    // Connect to Telegram
    plog.log("Connecting to Telegram . . . ", 0, 1);
    const client: TelegramClient = await createTelegramClient(string_session);
    plog.done(`Successfully connected!`, 0, 2);

    // Read Telegram messages
    plog.log("Reading Telegram messages . . . ", 0, 0);
    const message_ids: number[] = Object.keys(telegram_index).map(message_id => Number(message_id));
    const messages: string[] = await readMessages(client, "thecoreloop", message_ids);
    plog.done("Done", 0, 2);

    // Iterate through Telegram messages
    plog.log("Parsing Telegram messages . . . ", 0, 1);
    for (let i = 0; i < messages.length; i++) {
      // Assign message and message ID
      const message: string = messages[i];
      const message_id: number = telegram_index[i];

      // Instantiate <LAG> object
      plog.log("Creating LAG instance . . . ", 1, 0);
      const lag: LAG = new LAG(message, message_id);
      plog.done("Done", 0, 1);

      // Write result to .json file 
      const filename = `lag-${lag.number.toString().padStart(3, "0")}.json`;
      const filepath = path.join(FILEPATH_POSTS_DIR, filename);
      const filepath_short = filepath.split("/").slice(-4).join("/");
      plog.log(`Writing to file: /${filepath_short} . . . `, 1, 0);
      fs.writeFileSync(
        filepath, 
        JSON.stringify(lag, null, 2)
      );
      plog.done("Done", 0, 2);
    }
  } catch (error) {
    plog.error(`${error}`, 0, 2);
  }
}

main()
  .then(() => process.exit(0));

