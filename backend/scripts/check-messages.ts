// Node Modules 
import { TelegramClient } from "telegram";

// Local Modules
import { LAG_EXCEPTIONS, LAG, formatString } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function checkMessages(client: TelegramClient, channel: string) {
  // === Check messages === 
  // 1. Read messages from mainnet/devnet 
  // 2. Check the following: 
  //      i. Number of messages found and number of LAG posts 
  //      ii. Check for missing LAG posts between min <= x <= max 
  //      iii. Check for LAG posts that need formatting

  // Create number array from 1 to 10,000
  const number_array_1: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array_1.push(i);

  // Read messages from mainnet/devnet
  plog.log(`Reading messages: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array_1
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  plog.log(`Checking messages . . . `, 0, 0);
  // Collect LAG numbers that need formatting 
  let LAG_collection: LAG[] = [];
  let LAG_numbers_unformatted: number[] = [];
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      LAG_collection.push(lag);

      // Compare raw message to formatted message
      if (message.text != formatString(lag)) {
        LAG_numbers_unformatted.push(lag.number);
        const lines_a: string = message.text;
        const lines_b: string = formatString(lag);
        const limit: number = (lines_a.length > lines_b.length) 
          ? lines_a.length
          : lines_b.length;
        for (let i = 0; i < limit; i++) {
          plog.log(`==> A: ${lines_a[i]}`, 0, 1);
          plog.log(`==> B: ${lines_b[i]}`, 0, 2);
        }
      }
    } catch (error: any) {
      // plog.error(`${error}`, 0, 1);
      continue;
    }
  }
  // Collect missing LAG numbers in between 1 <= x <= max
  const LAG_numbers: number[] = LAG_collection.map(lag => lag.number);
  const missing_LAG_numbers: number[] = [];
  for (let i = 1; i <= Math.max(...LAG_numbers); i++) {
    if (!LAG_numbers.includes(i) && !LAG_EXCEPTIONS.includes(i)) missing_LAG_numbers.push(i);
  }
  plog.log(`Done`, 0, 1);
  
  // Console-log summary of results
  plog.log(`==> ${LAG_collection.length} LAG posts found: [#${Math.min(...LAG_numbers)}, #${Math.max(...LAG_numbers)}]`, 0, 1)
  plog.log(`==> ${missing_LAG_numbers.length} LAG posts missing: ${missing_LAG_numbers.join(", ")}`, 0, 1);
  plog.log(`==> ${LAG_numbers_unformatted.length} messages need formatting: ${LAG_numbers_unformatted.join(", ")}`, 0, 1);
}



