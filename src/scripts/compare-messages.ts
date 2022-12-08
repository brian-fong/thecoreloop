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
  // === Compare messages between production vs developer channels ===
  // 1. Read Telegram messages from production & developer channels
  // 2. Parse LAG content from both channels
  // 3. Compare number of messages and text content of messages
  // 4. Console-log results

  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages from production channel
  plog.log(`Reading Telegram messages: thecoreloop . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(client, "thecoreloop", number_array);
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 1);

  // Parse LAG content from Telegram messages
  const messages_lag: TelegramMessage[] = [];
  for (const message of messages) {
    try {
      const lag: LAG = new LAG(message);
      messages_lag.push(message);
    } catch (error) {
      continue;
    }
  }
  plog.log(`==> ${messages_lag.length} LAG posts found`, 0, 2);

  // Read Telegram messages from developer channel
  plog.log(`Reading Telegram messages: thecoreloop_test . . . `, 0, 0);
  const messages_test: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages_test.length} messages found`, 0, 1);

  // Parse LAG content from Telegram messages
  const messages_lag_test: TelegramMessage[] = [];
  for (const message of messages_test) {
    try {
      const lag: LAG = new LAG(message);
      messages_lag_test.push(message);
    } catch (error) {
      continue;
    }
  }
  plog.log(`==> ${messages_lag_test.length} LAG posts found`, 0, 2);

  // Compare number of messages between production vs developer channels
  if (messages_lag.length != messages_lag_test.length) {
    plog.error("Channels contain differing number of LAG posts", 0, 2);
    return;
  }

  // Compare text content of messages 1-by-1
  const mismatching_messages: TelegramMessage[][] = [];
  plog.log(`Comparing messages . . . `, 0, 1);
  for (let i = 0; i < messages_lag.length; i++) {
    // Assign messages
    const message_a: TelegramMessage = messages_lag[i];         // production
    const message_b: TelegramMessage = messages_lag_test[i];    // developer

    // Compare messages 
    plog.log(`Comparing thecoreloop message #${message_a.id} vs. thecoreloop_test message #${message_b.id} . . . `, 1, 0);
    if (message_a.text == message_b.text) plog.done(`Match`, 0, 2);
    else {
      plog.alert(`Not equal!`, 0, 2);
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
      plog.log(`==> production: ${message_a.text.split("\n")[0]}`, 1, 1);
      plog.log(`==> developer: ${message_b.text.split("\n")[0]}`, 1, 2);
    }
  }
}

