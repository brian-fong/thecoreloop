// Node Modules 
import fs from "fs";
import path from "path";
import { TelegramClient } from "telegram";

// Local Modules
import { TelegramMessage, TelegramIndex } from "../types";
import { LAG } from "../LAG";
import { readMessages, editMessage } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

export default async function revertMessages(client: TelegramClient, channel: string): Promise<void> {
  // === Revert messages on mainnet/devnet (in case SHTF) ===
  // 1. Read messages from backup channel
  // 2. Build Telegram Index to identify which messages to revert
  // 3. Edit all messages using Telegram Index for mainnet/devnet

  // Create number array from 1 to 10,000
  const number_array: number[] = [];
  for (let i = 1; i <= 10000; i++) number_array.push(i);

  // Read messages from backup 
  plog.log(`Reading messages: thecoreloop-backup . . . `, 0, 0);
  const messages_backup: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages_backup.length} messages found`, 0, 2);

  // Read messages from mainnet/devnet
  plog.log(`Reading messages: ${channel} . . . `, 0, 0);
  const messages: TelegramMessage[] = await readMessages(
    client, 
    channel, 
    number_array
  );
  plog.done(`Done`, 0, 1);
  plog.log(`==> ${messages.length} messages found`, 0, 2);

  // Parse LAG content from Telegram messages and build Telegram Index
  plog.log(`Reverting messages: ${channel} . . . `, 0, 1);
  for (let i = 0; i < messages.length; i++) {
    const message: TelegramMessage = messages[i];
    plog.log(`${i+1}. ${message.text.split("\n")[0]} . . . `, 1, 0);
    try {
      await editMessage(
        client, 
        "thecoreloop_test", 
        message.id, 
        message.text
      );
      plog.done(`Message sent`, 0, 1);
    } catch (error: any) {
      plog.error(`${error}`, 0, 1);
    }
  }
  plog.log(`Finished`, 0, 2);
  return;
}

