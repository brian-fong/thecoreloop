// === Node Modules ===
import { TelegramClient } from "telegram";

// === Local Modules ===
import sleep from "../helper/sleep";
import { LAG } from "../LAG";
import { TelegramMessage } from "../types";
import { readMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function compareMessages(client: TelegramClient): Promise<void> {
  // === Compare messages: mainnet vs devnet ===
  // 1. Read messages from mainnet & devnet
  // 2. Parse LAG content from both channels
  // 3. Compare number of messages and text content of messages
  // 4. Console-log results

  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read messages: mainnet & devnet
  plog.log(`Reading messages: mainnet & devnet . . . `, 0, 0);
  const messages_main: TelegramMessage[] = await readMessages(client, "thecoreloop", number_array);
  const messages_dev: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
  plog.done(`Done`, 0, 1);
  plog.log(`==> mainnet: ${messages_main.length} messages found`, 0, 1);
  plog.log(`==> devnet: ${messages_dev.length} messages found`, 0, 1);

  // Compare number of messages between mainnet & devnet
  plog.log(`Same number of messages? . . . `, 0, 0);
  if (messages_main.length != messages_dev.length) {
    plog.error("No: differing number of messages between mainnet & devnet!", 0, 2);
    plog.log(`Exiting`, 0, 2);
    return;
  } else plog.done(`Yes: all good`, 0, 2);

  // Compare text content of messages 1-by-1
  const mismatching_messages: TelegramMessage[][] = [];
  plog.log(`Comparing messages . . . `, 0, 1);
  for (let i = 0; i < messages_main.length; i++) {
    // Assign messages
    const message_a: TelegramMessage = messages_main[i];   // mainnet
    const message_b: TelegramMessage = messages_dev[i];    // devnet

    // Compare messages 
    if (message_a.text != message_b.text) {
      mismatching_messages.push([message_a, message_b]);
    }

    // Delay
    await sleep(100);
  }

  // If no mismatching messages, then console-log all good
  if (mismatching_messages.length == 0) plog.log(`Finished. All messages match!`, 0, 2);
  // Else console-log production and developer messages, respectively
  else {
    plog.alert(`${mismatching_messages.length} mismatching messages!`, 0, 1);
    for (let i = 0; i < mismatching_messages.length; i++) {
      const [message_a, message_b]: TelegramMessage[] = mismatching_messages[i];
      plog.log(`==> mainnet: ${message_a.text.split("\n")[0]}`, 1, 1);
      plog.log(`==> devnet: ${message_b.text.split("\n")[0]}`, 1, 2);
    }
  }
}


