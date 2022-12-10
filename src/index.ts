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
import formatMessages from "./scripts/format-messages";
import checkMessages from "./scripts/check-messages";
import revertMessages from "./scripts/revert-messages";
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Index =====", 0, 2);

  // Assign main menu options for user
  const main_menu: Choice[] = [
    { name: "Build LAG Archive [mainnet]" }, 
    { name: "Push messages [mainnet --> devnet]" },
    { name: "Compare messages [mainnet vs devnet]" },
    { name: "Format messages [mainnet/devnet]" }, 
    { name: "Check messages [mainnet/devnet]" },
    { name: "DANGEROUS: Revert messages [mainnet/devnet]" },
    { name: "DANGEROUS: Clear messages [devnet only]" },
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
      // === Build LAG Archive: mainnet ===
      // 1. Read Telegram messages from mainnet
      // 2. Parse Telegram messages for LAG content
      // 3. Write lag-###.txt/json files
      
      await buildArchive(client);
    } else if (choice.includes("Push messages")) {
      // === Push messages: mainnet --> devnet ===
      // 1. Read messages from mainnet
      // 2. Send messages to devnet, one-by-one
      // Note: if FloodWaitError, then sleep for 300s and try again

      await pushMessages(client);
    } else if (choice.includes("Compare messages")) {
      // === Compare messages: mainnet vs devnet ===
      // 1. Read messages mainnet + devnet
      // 2. Parse LAG content from both messages
      // 3. Compare number of messages & text content
      // 4. Console-log results

      await compareMessages(client);
    } else if (choice.includes("Format messages")) {
      // === Format messages: mainnet/devnet  ===
      // 1. Read messages from mainnet/devnet
      // 2. Parse LAG content and replace (edit) messages using 
      //      output of formatString()
      
      await formatMessages(client, "thecoreloop_test");
    } else if (choice.includes("Check messages")) {
      // === Check messages === 
      // 1. Read messages from mainnet/devnet
      // 2. Parses LAG content and checks for the following:
      //      i. If message is formatted appropriately, using output of formatString()
      //      ii. If there are any LAG posts missing, accounting for exceptions
      
      await checkMessages(client, "thecoreloop_test");
    } else if (choice.includes("Revert messages")) {
      // === Reverts messages ===
      // 1. Read Telegram messages from production channel and build Telegram Index
      // 2. Read lag-###.txt files in telegram-backup directory
      // 3. Edit all messages using Telegram Index 
      
      // Prompt user for confirmation
      const confirm = await input.confirm(
        "Confirm: ",
        { default: false },
      );

      if (confirm) await revertMessages(client, "thecoreloop_test");
      else plog.log(`Exiting`, 0, 2);
    } else if (choice.includes("Clear messages")) {
      // === Clear All Messages in developer channel === 
      // 1. Read Telegram messages in developer channel, collecting message IDs
      // 2. Use collected message IDs to delete all messages at once
      
      // Prompt user for confirmation
      const confirm = await input.confirm(
        "Confirm: ",
        { default: false },
      );

      // Clear channel or exit
      if (confirm) await clearMessages(client);
      else plog.log(`Exiting`, 0, 2);
    }
  }
}

main()
  .then(() => process.exit(0));

