// === Node Modules ===
import fs from "fs";
import path from "path";
const input = require("input");
import { TelegramClient } from "telegram";

// === Local Modules ===
import { TelegramMessage } from "../modules/types";
import PrettyLogger from "../modules/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);
import { LAG } from "../modules/look-at-games";
import { readMessages } from "../modules/telegram";

// === Filepaths ===
const FILEPATH_LAG_DIR: string = path.join(__dirname, "../../LAG/");

export default async function buildArchive(client: TelegramClient) {
  // === Build LAG Archive ===
  // 1. Read Telegram messages from production
  // 2. Parse Telegram messages for LAG content
  // 3. Write lag-###.txt/json files
  
  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages and filter out empty messages 
  plog.log(`Reading Telegram messages: thecoreloop . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(client, "thecoreloop", number_array);
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Parse LAG posts from Telegram messages
  plog.log(`Parsing Telegram messages: `, 0, 1);
  for (const message of messages) {
    // Instantiate <LAG> object
    try {
      plog.log(`Parsing Message #${message.id} . . . `, 1, 0);
      const lag: LAG = new LAG(message);
      plog.done(`LAG #${lag.number} found`, 0, 1);

      // Create/update lag-###.txt file
      const filename = `lag-${lag.number.toString().padStart(3, "0")}`;
      const filepath_LAG_txt = path.join(FILEPATH_LAG_DIR, "/telegram-backup/", filename+".txt");
      plog.log(`==> Writing file: /${filepath_LAG_txt.split("/").slice(-4).join("/")} . . . `, 1, 0);
      fs.writeFileSync(
        filepath_LAG_txt, 
        message.text,
      );
      plog.done(`Done`, 0, 1);

      // Create/update lag-###.json file
      const filepath_LAG_json = path.join(FILEPATH_LAG_DIR, "/json/", filename+".json");
      plog.log(`==> Writing file: /${filepath_LAG_json.split("/").slice(-4).join("/")} . . . `, 1, 0);
      fs.writeFileSync(
        filepath_LAG_json, 
        JSON.stringify(lag, null, 2)
      );
      plog.done(`Done`, 0, 1);
    } catch (error) {
      plog.error(`${error}`, 0, 1);
    }
  }
  plog.log(`Finished`, 0, 2);
}


