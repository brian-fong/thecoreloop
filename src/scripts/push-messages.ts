// === Node Modules ===
import fs from "fs";
import path from "path";
const input = require("input");
import { TelegramClient } from "telegram";

// === Local Modules ===
import sleep from "../helper/sleep";
import { TelegramMessage } from "../types";
import { readMessages, sendMessage } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function pushMessages(client: TelegramClient): Promise<void> {
  // === Push Telegram messages to developer channel ===
  // 1. Read messages from production & developer channels
  // 2. Identify new messages in production that haven't been pushed to 
  //      developer channel yet (based on number of messages)
  // 3. Prompt user to push new messages (if any) to developer channel
  // Note: if FloodWaitError, then sleep for 300s and try again
  
  // Create number array for reading Telegram messages
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read Telegram messages from production channel
  plog.log(`Reading Telegram messages: thecoreloop . . . `, 0, 0);
  const messages_a: TelegramMessage[] = await readMessages(
    client, 
    "thecoreloop", 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages_a.length} messages found`, 0, 2);

  // Read Telegram messages from developer channel 
  plog.log(`Reading Telegram messages: thecoreloop_test . . . `, 0, 0);
  const messages_b: TelegramMessage[] = await readMessages(
    client, 
    "thecoreloop_test", 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages_b.length} messages found`, 0, 2);

  // Check for new messages to push from production --> developer channel
  plog.log(`Checking for new Telegram messages . . . `, 0, 0);
  if (messages_a.length == messages_b.length) {
    // If no new messages, then console-log all good and exit
    plog.done(`Up to date; no new messages found`, 0, 2);
    return;
  }
  
  // Initialize array to store new messages
  const new_messages: TelegramMessage[] = [];
  // Compare messages and filter out new messages
  const start_index: number = messages_b.length;
  for (let i = start_index; i < messages_a.length; i++) {
    const new_message: TelegramMessage = messages_a[i];
    new_messages.push(new_message);
  }
  // Console-log results
  plog.alert(`${new_messages.length} new messages found!`, 0, 1);
  for (let i = 0; i < new_messages.length; i++) {
    const new_message: TelegramMessage = new_messages[i];
    if (i < new_messages.length-1) plog.log(`==> ${i+1}. ${new_message.text.split("\n")[0]}`, 0, 1);
    else plog.log(`==> ${i+1}. ${new_message.text.split("\n")[0]}`, 0, 2);
  }

  // Prompt user to update developer channel with new messages
  const confirm_push = await input.confirm(
    "Push new messages to developer channel?",
    { default: false },
  );
  if (!confirm_push) {
    // Exit
    plog.log(`Exiting`, 0, 2);
    return;
  }

  // Push messages to developer channel
  plog.log(`Pushing Telegram messages to developer channel . . . `, 0, 1);
  for (let i = 0; i < new_messages.length; i++) {
    const new_message: TelegramMessage = new_messages[i];
    try {
      plog.log(`${i+1}. ${new_message.text.split("\n")[0]} . . . `, 1, 0);
      await sendMessage(client, "thecoreloop_test", new_message.text);
      plog.done(`Message sent`, 0, 1);
    } catch (error: any) {
      plog.error(`${error}`, 0, 2);
      if (error.errorMessage.includes("FLOOD")) {
        // Sleep for 5 mins (300s)
        plog.log(`Sleeping for 300s . . . `, 0, 0);
        await sleep(300000);
        plog.done(`Done`, 0, 2);
        
        // Retry pushing message to developer channel
        plog.log(`${i+1}. ${new_message.text.split("\n")[0]} . . . `, 1, 0);
        await sendMessage(client, "thecoreloop_test", new_message.text);
        plog.done(`Done`, 0, 1);
      }
    }
  }
  plog.log(`Finished`, 0, 2);
}

