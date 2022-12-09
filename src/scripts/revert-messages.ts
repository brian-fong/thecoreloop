// Node Modules 
import fs from "fs";
import path from "path";
import { TelegramClient } from "telegram";

// Local Modules
import { TelegramMessage, TelegramIndex } from "../types";
import { LAG } from "../LAG";
import { readMessages, editMessage } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function revertMessages(client: TelegramClient, channel: string): Promise<void> {
  // === Re-Edit messages from production channel to saved backup (in case SHTF) ===
  // 1. Read Telegram messages from production channel and build Telegram Index
  // 2. Read lag-###.txt files in telegram-backup directory
  // 3. Edit all messages using Telegram Index 

  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages
  plog.log(`Reading Telegram messages: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Parse LAG content from Telegram messages and build Telegram Index
  plog.log(`Parsing LAG content from Telegram messages . . . `, 0, 1);
  const telegram_index: TelegramIndex = {};
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      plog.done(`LAG #${lag.number} found!`, 1, 1);

      // Assuming <LAG> object instantiated successfully, 
      //   append entry to Telegram Index
      telegram_index[message.id] = lag.number;
    } catch (error) {
      // plog.error(`${error}`, 0, 1);
      continue;
    }
  }
  plog.log(`Finished`, 0, 2);

  // Assign Telegram message IDs, these IDs should only be associated with 
  //   Telegram messages containing LAG content
  const message_ids: number[] = Object.keys(telegram_index).map(id => Number(id));

  // Assign lag-###.txt filenames
  plog.log(`Collecting lag-###.txt files . . . `, 0, 0);
  const filepath_telegram_backup: string = path.join(__dirname, "../../LAG/telegram-backup/");
  const filenames: string[] = fs.readdirSync(filepath_telegram_backup, { encoding: "utf-8" });
  plog.done(`Done`, 0, 2);

  // Check if mismatching number of lag-###.txt files and message IDs and console-log
  //   results. If mismatching number, then exit (no edits are made)
  plog.log(`Equal number of lag-###.txt files and message IDs in Telegram Index? . . . `, 0, 0);
  if (filenames.length == message_ids.length) plog.done(`Equal!`, 0, 2);
  else {
    plog.error(`Not Equal!`, 0, 1);
    plog.alert(`${filenames.length} lag-###.txt files found and ${message_ids.length} Telegram message IDs`, 1, 2);
    plog.log(`No edits have been made`, 0, 2);
    return;
  }

  // Iterate through Telegram message IDs and lag-###.txt filenames
  plog.log(`Reverting Telegram messages . . . `, 0, 1);
  for (let i = 0; i < filenames.length; i++) {
    // Assign message ID and filename
    const message_id: number = message_ids[i];
    const filename: string = filenames[i];

    // Read lag-###.txt file
    const filepath: string = path.join(filepath_telegram_backup, filename);
    const message: string = fs.readFileSync(filepath, { encoding: "utf-8" });

    // Edit message on Telegram channel, replacing with string from lag-###.txt file
    plog.log(`Reverting message #${message_id}: ${message.split("\n")[0]} . . . `, 1, 0);
    try {
      await editMessage(
        client, 
        channel, 
        message_id, 
        message
      );
      plog.done(`Done`, 0, 1);
    } catch (error: any) {
      plog.error(`Some error occurred; no edit has been made`, 0, 1);
    }
  }
  plog.log(`Finished`, 0, 2);
  return;
}

