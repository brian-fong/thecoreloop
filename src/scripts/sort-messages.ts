// Node Modules 
import fs from "fs";
import path from "path";
import { TelegramClient } from "telegram";

// Local Modules
import sleep from "../helper/sleep";
import { formatString, LAG } from "../LAG";
import { editMessage, readMessages } from "../telegram";
import { TelegramIndex, TelegramMessage } from "../types";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function sortMessages(client: TelegramClient, channel: string): Promise<void> {
  // === Update Telegram message (LAG posts) with categories sorted ===
  // 1. Read Telegram messages from production/developer channel and build Telegram Index
  // 2. Use Telegram Index to parse LAG content from Telegram messages and use output of 
  //      formatString() to update message with categories sorted
  
  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Build Telegram index by reading messages from production/developer channel
  plog.log(`Building Telegram Index: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  
  // Parse LAG content from Telegram messages and build Telegram Index
  const telegram_index: TelegramIndex = {};
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);

      // Assuming <LAG> object instantiated successfully, 
      //   append entry to Telegram Index
      telegram_index[message.id] = lag.number;
    } catch (error) {
      // If no LAG content, then skip 
      continue;
    }
  }
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 1);
  plog.log(`==> ${Object.values(telegram_index).length} LAGs found`, 0, 2);

  // Assign Telegram message IDs, these IDs should only be associated with 
  //   Telegram messages containing LAG content
  const message_ids: number[] = Object.keys(telegram_index).map(id => Number(id));

  // Sort through Telegram messages 1-by-1 using Telegram Index
  plog.log(`Sorting Telegram messages . . . `, 0, 1);
  for (let i = 0; i < message_ids.length; i++) {
    const message_id: number = message_ids[i];
    let new_message: string = "";
    try {
      // Parse LAG content from Telegram message and build new message with categories sorted
      plog.log(`${i+1}. Sorting LAG #${telegram_index[message_id]} . . . `, 1, 0);
      const LAG_message: TelegramMessage = (await readMessages(
        client, 
        channel, 
        [message_id]
      ))[0];
      const lag: LAG = new LAG(LAG_message);
      new_message = formatString(lag, true);

      // Assign string array of lines of LAG post
      const lines_a: string[] = LAG_message.text
        .split("\n")
        .filter(line => line.length > 0);
      const lines_b: string[] = new_message
        .split("\n")
        .filter(line => line.length > 0);

      // Compare lines
      let equality: boolean = true; 
      if (lines_a.length == lines_b.length) {
        for (let i = 0; i < lines_a.length; i++) {
          const line_a: string = lines_a[i];
          const line_b: string = lines_b[i];
          if (line_a != line_b) {
            equality = false;
            break;
          }
        }
      }
        
      if (equality) {
        plog.done(`Already sorted`, 0, 2);
        continue;
      }

      // Edit Telegram message using output of formatString()
      await editMessage(
        client, 
        channel, 
        message_id,
        new_message,
      );
      plog.done(`Done`, 0, 2);
    } catch(error: any) {
      if (error.errorMessage.includes("FLOOD")) {
        plog.error(`${error}`, 0, 2);
        
        // Sleep for 5 mins (300s)
        plog.log(`Sleeping for 300s . . . `, 0, 0);
        await sleep(300000);
        plog.done(`Done`, 0, 2);
        
        // Decrement i
        i--;
      } else if (error.errorMessage.includes("MESSAGE_NOT_MODIFIED")) plog.alert(`Message already sorted`, 0, 2);
      else plog.error(`${error}`, 0, 2);
    }
  }
  plog.done(`Finished`, 0, 2);
}

