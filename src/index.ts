// === Node Modules ===
const input = require("input");
import { TelegramClient } from "telegram";

// === Local Modules ===
import { Choice } from "./types";
import { createTelegramClient } from "./telegram";
import buildArchive from "./scripts/build-lag-archive";
import pushMessages from "./scripts/push-messages";
import clearMessages from "./scripts/clear-messages";
import compareMessages from "./scripts/compare-messages";
import sortMessages from "./scripts/sort-messages";
import checkSorted from "./scripts/check-sorted";
import revertMessages from "./scripts/revert-messages";
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Index =====", 0, 2);

  // Assign main menu options for user
  const main_menu: Choice[] = [
    {
      name: "Build LAG Archive",
    }, 
    {
      name: "Compare messages between production vs developer channels",
    },
    {
      name: "Push messages to developer channel",
    },
    {
      name: "Clear all messages in developer channel",
    },
    {
      name: "Sort messages in developer channel",
    }, 
    {
      name: "Check if messages are sorted (developer channel)",
    },
    {
      name: "Revert edits to messages (developer channel)",
    },
  ];

  // Prompt user input
  const main_input: string[] = await input.checkboxes(
    "Greetings. Select from the following options: ", 
    main_menu, 
  );

  // Iterate through input choices
  for (const choice of main_input) {
    // Connect to Telegram
    plog.log("Connecting to Telegram . . . ", 0, 1);
    const client: TelegramClient = await createTelegramClient(string_session);
    plog.done(`Successfully connected to Telegram!`, 0, 2);

    // Handle each choice
    if (choice.includes("Build LAG Archive")) {
      // === Build LAG Archive ===
      // 1. Read Telegram messages from production
      // 2. Parse Telegram messages for LAG content
      // 3. Write lag-###.txt/json files
      
      await buildArchive(client);
    } else if (choice.includes("Push messages")) {
      // === Push Telegram messages to developer channel ===
      // 1. Read messages from production channel
      // 2. Send messages 1-by-1 to developer channel
      // Note: if FloodWaitError, then sleep for 300s and try again

      await pushMessages(client);
    } else if (choice.includes("Clear all messages")) {
      // === Clear All Messages in developer channel === 
      // 1. Read Telegram messages in developer channel, collecting message IDs
      // 2. Use collected message IDs to delete all messages at once
      
      // Prompt user for confirmation
      const confirm_clear = await input.confirm(
        "Confirm: ",
        { default: false },
      );

      // Clear channel or exit
      if (confirm_clear) await clearMessages(client);
      else plog.log(`Exiting`, 0, 2);
    } else if (choice.includes("Compare messages")) {
      // === Compare messages between production vs developer channels ===
      // 1. Read Telegram messages from production & developer channels
      // 2. Parse LAG content from both channels
      // 3. Compare number of messages and text content of messages
      // 4. Console-log results

      await compareMessages(client);
    } else if (choice.includes("Sort messages")) {
      // === Update Telegram message (LAG posts) with categories sorted ===
      // 1. Read Telegram messages from production/developer channel and build Telegram Index
      // 2. Use Telegram Index to parse LAG content from Telegram messages and use output of 
      //      formatString() to update message with categories sorted
      
      await sortMessages(client, "thecoreloop_test");
    } else if (choice.includes("Check if messages are sorted")) {
      // === Check if LAG posts are sorted === 
      // 1. Read Telegram messages from production channel
      // 2. Parses LAG content from Telegram messages and checks order of categories 
      // 3. Console-log results
      
      await checkSorted(client, "thecoreloop_test");
    } else if (choice.includes("Revert edits")) {
      // === Re-Edit messages from production channel to saved backup (in case SHTF) ===
      // 1. Read Telegram messages from production channel and build Telegram Index
      // 2. Read lag-###.txt files in telegram-backup directory
      // 3. Edit all messages using Telegram Index 

      await revertMessages(client, "thecoreloop_test");
    }
  }
}

main()
  .then(() => process.exit(0));

