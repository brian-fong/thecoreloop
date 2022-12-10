// Node Modules 
import { TelegramClient } from "telegram";

// Local Modules
import { LAG, formatString } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function checkFormat(client: TelegramClient, channel: string) {
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

  // Parse LAG content from Telegram messages 
  plog.log(`Checking if Telegram message are formatted: `, 0, 1);
  let formatted_message_count: number = 0;
  let lag_message_count: number = 0;
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      lag_message_count++;
      plog.log(`LAG #${lag.number} found! Checking if formatted . . . `, 1, 0);

      const text_raw: string = message.text;
      const text_formatted: string = formatString(lag);
      if (text_raw == text_formatted) {
        plog.done(`All good`, 0, 1);
        formatted_message_count++;
      }
    } catch (error: any) {
      // plog.error(`${error}`, 0, 1);
      continue;
    }
  }
  plog.log(`Finished: ${formatted_message_count} out of ${lag_message_count} messages formatted`, 0, 2);
}

