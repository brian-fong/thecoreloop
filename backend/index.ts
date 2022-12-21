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
    { name: "Backup messages [mainnet --> backup]" }, 
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
      // Build LAG Archive: mainnet 
      await buildArchive(client);
    } else if (choice.includes("Backup messages")) {
      // Backup messages (push messages: mainnet --> backup) ===
      await pushMessages(client, "thecoreloop", "thecoreloop_backup");
    } else if (choice.includes("Push messages")) {
      // Push messages: mainnet --> devnet ===
      // Note: if FloodWaitError, then sleep for 300s and try again
      await pushMessages(client, "thecoreloop", "thecoreloop_test");
    } else if (choice.includes("Compare messages")) {
      // Compare messages: mainnet vs devnet 
      await compareMessages(client);
    } else if (choice.includes("Format messages")) {
      // Format messages: mainnet/devnet  
      await formatMessages(client, "thecoreloop_test");
    } else if (choice.includes("Check messages")) {
      // Check messages 
      await checkMessages(client, "thecoreloop_test");
    } else if (choice.includes("Revert messages")) {
      // Revert messages
      
      // Prompt user for confirmation
      const confirm = await input.confirm(
        "Confirm: ",
        { default: false },
      );

      if (confirm) await revertMessages(client, "thecoreloop_test");
      else plog.log(`Exiting`, 0, 2);
    } else if (choice.includes("Clear messages")) {
      // Clear all Messages in developer channel 
      
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


