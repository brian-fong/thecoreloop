// === Node Modules ===
import { TelegramClient } from "telegram";

// === Local Modules ===
import sleep from "../helper/sleep";
import { TelegramMessage } from "../types";
import { readMessages, deleteMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function clearChannel(client: TelegramClient) {
  // === Clear All Messages in developer channel === 
  // 1. Read Telegram messages in developer channel, collecting message IDs
  // 2. Use collected message IDs to delete all messages at once
  
  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages
  plog.log(`Reading Telegram messages: thecoreloop_test . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);
  
  // Delete Telegram messages
  const message_ids: number[] = messages.map(message => message.id);
  plog.log(`Deleting Telegram messages . . . `, 0, 0);
  await deleteMessages(client, "thecoreloop_test", message_ids);
  plog.done(`Done`, 0, 2);

  // Delay 
  await sleep(100);
}

