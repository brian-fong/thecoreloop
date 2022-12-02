// Node Modules
import fs from "fs";
import path from "path";
const input = require("input");
import { TelegramClient } from "telegram";
import { createTelegramClient, checkIndex, readMessages, readIndex } from "../telegram";

// Local Modules
import { LAG } from "../LAG";
import { TelegramIndex, Choice } from "../types";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Index =====", 0, 2);

  const main_menu: Choice[] = [
    {
      name: "Build LAG Archive",
      value: 0,
    }, 
    {
      name: "Edit Telegram messages (work-in-progress)",
      value: 1,
    }
  ];
  // Prompt user input
  const main_input: number[] = await input.checkboxes(
    "Greetings. Select from the following options: ", 
    main_menu, 
  );

  if (main_input.length > 0) {
    for (const user_choice of main_input) {
      // Connect to Telegram
      plog.log("Connecting to Telegram . . . ", 0, 1);
      const client: TelegramClient = await createTelegramClient(string_session);
      plog.done(`Successfully connected to Telegram!`, 0, 2);

      // Build LAG Archive
      if (user_choice == 0) {
        // Filepath to telegram-index.json file
        const FILEPATH_INDEX: string = path.join(__dirname, "../../LAG/telegram-index.json");

        // Initialize Telegram Index
        let telegram_index: TelegramIndex = {};

        // Try reading telegram-index.json file
        try {
          plog.log(`\nReading Telegram Index JSON file . . . `, 1, 0);
          telegram_index = readIndex(FILEPATH_INDEX);
          plog.done("Done", 0, 1);
        } catch (error: any) {
          if (error.code == "ENOENT") plog.alert(`ENOENT: telegram-index.json file not found`, 0, 1);
          else plog.error(`${error}`, 0, 1);
        }

        // Collect message IDs and sort in ascending order
        const message_ids: number[] = Object.keys(telegram_index).map(id => Number(id));
        message_ids.sort(function(a, b) {
          return a - b;
        });

        // Collect LAG numbers and sort in ascending order
        const LAG_numbers: number[] = Object.values(telegram_index);
        LAG_numbers.sort(function(a, b) {
          return a - b;
        });

        // Console-log latest LAG number
        const latest_LAG_number: string = (message_ids.length > 0) 
          ? `#${telegram_index[message_ids[message_ids.length-1]]}`
          : `None`;
        plog.log(`Latest LAG post: ${latest_LAG_number}`, 1, 1);

        // Initialize empty-message counter
        let empty_message_count = 0;

        // Initialize starting message ID: either latest existing ID or at beginning
        let message_id: number = (message_ids.length > 0)
          ? message_ids[message_ids.length-1]  // latest message ID
          : 1;  // if message_ids is empty, then start at 1 (beginning of message history)

        // Iterate through Telegram messages
        plog.log(`Telegram: `, 1, 1);
        while (empty_message_count < 10) {
          // Read Telegram message
          plog.log(`Reading message #${message_id} . . . `, 2, 0);
          const messages: string[] = await readMessages(client, "thecoreloop", [message_id]);

          if (messages.length == 0) {
            // In case of empty message . . . 
            plog.alert(`Empty message`, 0, 1);
            empty_message_count++;
          } else {
            // Assign message variable
            const message: string = messages[0];

            // Try instantiating <LAG> object
            try {
              const lag: LAG = new LAG(message, message_id);

              // Assuming LAG post is valid, append new entry to Telegram Index
              if (lag.number) telegram_index[message_id] = lag.number;
              plog.done(`LAG #${lag.number} found!`, 0, 1);

              // Create/update telegram-index.json file
              plog.log(`Updating Telegram Index . . . `, 3, 0);
              fs.writeFileSync(
                FILEPATH_INDEX,
                JSON.stringify(telegram_index, null, 2)
              );
              plog.done(`Done`, 0, 1);

              // Create/update lag-###.json file
              const FILEPATH_POSTS_DIR: string = path.join(__dirname, "../../LAG/posts/");
              const filename = `lag-${lag.number.toString().padStart(3, "0")}.json`;
              const filepath_lag_post = path.join(FILEPATH_POSTS_DIR, filename);
              plog.log(`Writing file: /${filepath_lag_post.split("/").slice(-4).join("/")} . . . `, 3, 0);
              fs.writeFileSync(
                filepath_lag_post, 
                JSON.stringify(lag, null, 2)
              );
              plog.done(`Done`, 0, 1);

              empty_message_count = 0;  // Reset empty message counter
            } catch (error: any) {
              plog.error(error.message, 0, 1);
            }
          }

          // Move to next Telegram message
          message_id++;
        }
        plog.log(`Finished`, 0, 2);

        // Check Telegram Index
        plog.log(`Checking Telegram Index . . . `, 0 , 0);
        const missing_LAG_numbers: number[] = checkIndex(telegram_index);
        if (missing_LAG_numbers.length > 0) {
          plog.alert(`Missing LAG posts: ${missing_LAG_numbers.join(", ")}`, 0, 2);
        } else {
          plog.done(`All good`, 0, 2);
        }
      }
    }
  }
}

main()
  .then(() => process.exit(0));

