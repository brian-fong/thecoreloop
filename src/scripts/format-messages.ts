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

export default async function formatMessages(client: TelegramClient, channel: string): Promise<void> {
  // === Update Telegram message (LAG posts) with categories sorted ===
  // 1. Read Telegram messages from production/developer channel and build Telegram Index
  // 2. Use Telegram Index to parse LAG content from Telegram messages and use output of 
  //      formatString() to update message with categories sorted
  
  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages from production channel
  plog.log(`Reading Telegram messages: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Sort through Telegram messages 1-by-1 using Telegram Index
  plog.log(`Formatting Telegram messages . . . `, 0, 1);
  for (let i = 0; i < messages.length; i++) {
    const message: TelegramMessage = messages[i];
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      plog.log(`Formatting LAG #${lag.number} . . . `, 1, 0);

      // Assign raw and formatted text
      const text_raw: string = message.text;
      const text_formatted: string = formatString(lag, true);

      if (text_raw == text_formatted) {
        // If raw text and formatted text are equivalent, then skip
        plog.done(`Already formatted`, 0, 1);
      }
      else {
        // Else, edit Telegram message using output of formatString()
        await editMessage(
          client, 
          channel, 
          message.id,
          text_formatted,
        );
        plog.done(`Successfully formatted`, 0, 1);
      }
    } catch(error: any) {
      plog.error(`${error}`, 1, 1);
      if (error.errorMessage && error.errorMessage.includes("FLOOD")) {
        plog.error(`${error}`, 1, 1);
        
        // Sleep for 5 mins (300s)
        plog.log(`Sleeping for 300s . . . `, 0, 0);
        await sleep(300000);
        plog.done(`Done`, 0, 2);
        
        // Decrement i
        i--;
      } 
    }
  }
  plog.done(`Finished`, 0, 2);
}

