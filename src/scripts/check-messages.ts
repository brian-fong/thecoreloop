// Node Modules 
import { TelegramClient } from "telegram";

// Local Modules
import { LAG_EXCEPTIONS, LAG, formatString } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function checkMessages(client: TelegramClient, channel: string) {
  // Create number array from 1 to 10,000
  const number_array_1: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array_1.push(i);

  // Read messages from mainnet/devnet
  plog.log(`Reading Telegram messages: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array_1
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Check messages: look for formatting differences 
  plog.log(`Checking messages . . . `, 0, 0);
  let flagged_messages: TelegramMessage[] = [];
  let LAG_collection: LAG[] = [];
  for (const message of messages) {
    try {
      // Instantiate <LAG> object
      const lag: LAG = new LAG(message);
      LAG_collection.push(lag);

      // Assign raw vs formatted text 
      const text_raw: string = message.text;
      const text_formatted: string = formatString(lag);

      // If raw text is not formatted, then flag message
      if (text_raw != text_formatted) flagged_messages.push(message);
    } catch (error: any) {
      // plog.error(`${error}`, 0, 1);
      continue;
    }
  }
  plog.log(`Finished`, 0, 1);

  // Check messages: look for missing LAG numbers in between 1 <= x <= max
  const LAG_numbers: number[] = LAG_collection.map(lag => lag.number);
  const missing_LAG_numbers: number[] = [];
  for (let i = 1; i <= Math.max(...LAG_numbers); i++) {
    if (!LAG_numbers.includes(i) && !LAG_EXCEPTIONS.includes(i)) missing_LAG_numbers.push(i);
  }
  
  // Console-log summary of results
  plog.log(`==> ${LAG_collection.length} LAG posts found; ${missing_LAG_numbers.length} LAG posts missing`, 0, 1);
  if (missing_LAG_numbers.length > 0) plog.log(`==> Missing LAGs #: ${missing_LAG_numbers.join(", ")}`, 1, 1);
  plog.log(`==> ${flagged_messages.length} messages need formatting`, 0, 1);
  if (flagged_messages.length > 0) {
    for (const message of flagged_messages) {
      plog.log(`==> ${message.text.split("\n")[0]}`, 1, 1);
    }
    plog.log("", 0, 1);
  }
}


