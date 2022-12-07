// Node Modules 
import { TelegramClient } from "telegram";

// Local Modules
import { LAG, formatString } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function checkAccuracy(client: TelegramClient, channel: string) {
  // === Check if LAG parsing algorithm is accurate ===
  // 1. Read Telegram messages (production/developer)
  // 2. Parse LAG content from Telegram messages 
  // 3. Compare line-by-line the output of formatString() and the original message.
  // 4. Console-log results

  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages from production channel 
  plog.log(`Reading Telegram messages: thecoreloop . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Parse LAG content from Telegram messages 
  plog.log(`Parsing Telegram messages: `, 0, 1);
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      plog.log(`Parsing message #${message.id} . . . `, 1, 0);
      const lag: LAG = new LAG(message);
      plog.done(`LAG #${lag.number} found!`, 0, 1);

      // Split production message line-by-line
      const lines_a: string[] = message.text
        .split("\n").map(line => line.trim()).filter(line => line.length > 0);
     
      // Split developer message line-by-line
      const lines_b: string[] = formatString(lag, false)
        .split("\n").map(line => line.trim()).filter(line => line.length > 0);

      // Assign end condition of for-loop to iterate through lines
      const limit: number = (lines_a.length > lines_b.length) 
        ? lines_a.length
        : lines_b.length;

      // Compare reconstructed message vs original message
      plog.log(`Comparing results of LAG-parsing algorithm with original Telegram message . . . `, 2, 0);
      let equality: boolean = true;
      for (let i = 0; i < limit; i++) {
        // Check for equality between lines
        if (lines_a[i] != lines_b[i]) {
          equality = false;
          break;
        }
      }

      // If lines are equal, then console-log all good
      if (equality) plog.done(`Match!`, 0, 2);
      // Else, console-log mismatching lines, respectively
      else {
        plog.error(`Different!`, 0, 1);
        for (let i = 0; i < limit; i++) {
          plog.log(`Production: "${lines_a[i]}"`, 3, 1);
          plog.log(`Developer: "${lines_b[i]}"`, 3, 2);
        }
        // Exit for-loop 
        break;
      }
    } catch (error) {
      plog.error(`${error}`, 0, 2);
    }
  }
  plog.log(`Finished`, 0, 2);
}

