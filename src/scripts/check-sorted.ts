// Node Modules 
import { TelegramClient } from "telegram";

// Local Modules
import { LAG, CATEGORIES } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function checkSorted(client: TelegramClient, channel: string) {
  // === Check if LAG posts are sorted === 
  // 1. Read Telegram messages from production channel
  // 2. Parses LAG content from Telegram messages and checks order of categories 
  // 3. Console-log results

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
  plog.log(`Checking if Telegram messages are sorted: `, 0, 1);
  let sorted_message_count: number = 0;
  let lag_message_count: number = 0;
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      lag_message_count++;
      plog.log(`LAG #${lag.number} found! Checking if sorted . . . `, 1, 0);

      // Assign array of official categories
      const categories_official: string[] = Object.values(CATEGORIES);
      
      // Assign array of categories found 
      const indices_found: number[] = lag.content.map(category_group => categories_official.indexOf(category_group.category));

      // Check order of categories
      let ascending_order: boolean = true;
      let category_out_of_order: string = "";
      for (let i = 0; i < indices_found.length-1; i++) {
        // Assign current and next indices 
        const current_index: number = indices_found[i];
        const next_index: number = indices_found[i+1];

        // Compare indices
        if (current_index > next_index) {
          ascending_order = false;
          category_out_of_order = categories_official[current_index];
          break;
        }
      }

      if (ascending_order) {
        // If LAG post is in ascending order, then console-log all good
        plog.done(`All good`, 0, 1);
        sorted_message_count++;
      }
      else {
        // Console-log the first out-of-order category
        plog.alert(`Out of order`, 0, 1);
        plog.log(`==> Starting with category: ${category_out_of_order}`, 1, 1);
      }
    } catch (error) {
      // plog.error(`${error}`, 0, 2);
      continue
    }
  }
  plog.log(`Finished: ${sorted_message_count} out of ${lag_message_count} messages sorted`, 0, 2);
}

