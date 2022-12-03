// Node Modules
import fs from "fs";
import path from "path";
const input = require("input");
import { TelegramClient } from "telegram";

// Local Modules
import { sleep } from "../helper/sleep";
import { LAG, formatString } from "../LAG";
import { TelegramMessage, Choice } from "../types";
import { createTelegramClient, readMessages, sendMessage, deleteMessages } from "../telegram";
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

// Filepaths
const FILEPATH_LAG_DIR: string = path.join(__dirname, "../../LAG/");

async function main(): Promise<void> {
  plog.log("===== Test: Index =====", 0, 2);

  // Assign main menu options for user
  const main_menu: Choice[] = [
    {
      name: "Build LAG Archive",
      value: 0,
    }, 
    {
      name: "Push LAG posts to thecoreloop_test Channel",
      value: 1,
    },
    {
      name: "Clear all messages in thecoreloop_test Channel",
      value: 2,
    },
    {
      name: "Compare thecoreloop and thecoreloop_test LAG posts",
      value: 3,
    }
  ];

  // Prompt user input
  const main_input: number[] = await input.checkboxes(
    "Greetings. Select from the following options: ", 
    main_menu, 
  );

  for (const user_choice of main_input) {
    // Connect to Telegram
    plog.log("Connecting to Telegram . . . ", 0, 1);
    const client: TelegramClient = await createTelegramClient(string_session);
    plog.done(`Successfully connected to Telegram!`, 0, 2);

    if (user_choice == 0) {
      // === Build LAG Archive ===
      // 1. Read Telegram messages
      // 2. Parse text for LAG content
      // 3. Write lag-###.txt/json files
      
      // Create number array from 1 to 10,000
      const number_array: number[] = [];
      for (let i = 1; i <= 10000; i++) number_array.push(i);

      // Read Telegram messages and filter out empty messages 
      plog.log(`Reading Telegram messages . . . `, 0, 0);
      const messages: TelegramMessage[] = await readMessages(client, "thecoreloop", number_array);
      plog.done(`Done`, 0, 1);
      plog.log(`==> ${messages.length} messages found`, 0, 2);

      // Parse LAG posts from Telegram messages
      plog.log(`Parsing LAG posts from Telegram messages: `, 0, 1);
      for (const message of messages) {
        // Instantiate <LAG> object
        try {
          plog.log(`Parsing Message #${message.id} . . . `, 0, 0);
          const lag: LAG = new LAG(message.text, message.id);
          plog.done(`LAG #${lag.number} found`, 0, 1);

          // Create/update lag-###.txt file
          const filename = `lag-${lag.number.toString().padStart(3, "0")}`;
          const filepath_LAG_txt = path.join(FILEPATH_LAG_DIR, "/telegram-backup/", filename+".txt");
          plog.log(`Writing file: /${filepath_LAG_txt.split("/").slice(-4).join("/")} . . . `, 3, 0);
          fs.writeFileSync(
            filepath_LAG_txt, 
            message.text,
          );
          plog.done(`Done`, 0, 1);

          // Create/update lag-###.json file
          const filepath_LAG_json = path.join(FILEPATH_LAG_DIR, "/json/", filename+".json");
          plog.log(`Writing file: /${filepath_LAG_json.split("/").slice(-4).join("/")} . . . `, 3, 0);
          fs.writeFileSync(
            filepath_LAG_json, 
            JSON.stringify(lag, null, 2)
          );
          plog.done(`Done`, 0, 1);
        } catch (error) {
          plog.error(`${error}`, 0, 1);
        }
      }
      plog.log(`Finished`, 0, 2);
    } else if (user_choice == 1) {
      // === Push LAG posts to thecoreloop_test Channel ===
      
      // Create number array from 1 to 10,000
      const number_array: number[] = [];
      for (let i = 1; i <= 10000; i++) number_array.push(i);

      // Read Telegram messages and filter out empty messages 
      plog.log(`Reading Telegram messages . . . `, 0, 0);
      const messages: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
      plog.done(`Done`, 0, 1);
      plog.log(`==> ${messages.length} messages found`, 0, 2);

      // Initialize latest LAG number
      let latest_LAG_number: number = 1;

      // Parse LAG content from Telegram messages
      plog.log(`Parsing Telegram messages . . . `, 0, 1);
      for (const message of messages) {
        try {
          const lag: LAG = new LAG(message.text, message.id);
          latest_LAG_number = lag.number;
          plog.log(`LAG #${latest_LAG_number} found`, 1, 1);
        } catch (error: any) {
          plog.error(error, 1, 1);
        }
      }
      plog.log(`Finished`, 0, 2);
      
      // Filepath for /thecoreloop/LAG/json/
      const filenames_LAG_json: string[] = fs.readdirSync(
        path.join(FILEPATH_LAG_DIR, "/json/")
      );

      // Iterate through lag-###.json files
      plog.log(`Accessing LAG Archive . . . `, 0, 1);
      let lag_cache: any = {};
      for (const filename_LAG_json of filenames_LAG_json) {
        try {
          // Read lag-###.json file
          const filepath_LAG_json: string = path.join(FILEPATH_LAG_DIR, "/json/", filename_LAG_json);
          plog.log(`Reading file: /${filepath_LAG_json.split("/").slice(-4).join("/")} . . . `, 1, 0);
          const lag: LAG = JSON.parse(fs.readFileSync(filepath_LAG_json, { encoding: "utf-8" }))
          lag_cache = lag;

          // If current LAG # is less than/equal to latest LAG #, then skip
          if (lag.number <= latest_LAG_number) {
            plog.alert(`LAG #${lag.number} already posted`, 0, 1);
            continue;
          } else {
            // Send message to thecoreloop_test channel
            const response: any = await sendMessage(client, "thecoreloop_test", formatString(lag));
            plog.done(`LAG #${lag.number} posted`, 0, 1);
          }
        } catch (error: any) {
          plog.error(`${error}`, 0, 1);
          if (error.errorMessage.includes("FLOOD")) {
            // Sleep for 5 mins (300s)
            plog.log(`Sleeping for 300s . . . `, 0, 0);
            await sleep(300000);
            plog.done(`Done`, 0, 1);
            // Retry reading lag-###.json file
            const filepath_LAG_json: string = path.join(FILEPATH_LAG_DIR, "/json/", filename_LAG_json);
            plog.log(`Reading file: /${filepath_LAG_json.split("/").slice(-4).join("/")} . . . `, 1, 0);
            const lag: LAG = JSON.parse(fs.readFileSync(filepath_LAG_json, { encoding: "utf-8" }))
            lag_cache = lag;
            // Retry sending message to thecoreloop_test channel
            const response: any = await sendMessage(client, "thecoreloop_test", formatString(lag_cache));
            plog.done(`LAG #${lag_cache.number} posted`, 0, 1);
          }
        }
      }
      plog.log(`Finished`, 0, 2);
    } else if (user_choice == 2) {
      // === Clear All Messages in thecoreloop_test Channel === 
      
      // Create number array from 1 to 10,000
      const number_array: number[] = [];
      for (let i = 1; i <= 10000; i++) number_array.push(i);

      // Read Telegram messages and filter out empty messages 
      plog.log(`Reading Telegram messages . . . `, 0, 0);
      const messages: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
      plog.done(`Done`, 0, 1);
      plog.log(`==> ${messages.length} messages found`, 0, 2);
      
      // Delete Telegram messages
      const message_ids: number[] = messages.map(message => message.id);
      plog.log(`Deleting Telegram messages . . . `, 0, 0);
      const response: any = await deleteMessages(client, "thecoreloop_test", message_ids);
      plog.done(`Done`, 0, 2);
    } else if (user_choice == 3) {
      // === Compare thecoreloop and thecoreloop_test LAG posts ===

      // Create number array from 1 to 10,000
      const number_array: number[] = [];
      for (let i = 1; i <= 10000; i++) number_array.push(i);

      // Read thecoreloop messages
      plog.log(`Reading thecoreloop messages . . . `, 0, 0);
      const messages: TelegramMessage[] = await readMessages(client, "thecoreloop", number_array);
      plog.done(`Done`, 0, 1);
      plog.log(`==> ${messages.length} messages found`, 0, 1);

      // Parse LAG posts 
      const messages_thecoreloop: string[] = [];
      for (const message of messages) {
        try {
          const lag: LAG = new LAG(message.text, message.id);
          messages_thecoreloop.push(message.text);
        } catch (error) {
          continue;
        }
      }
      plog.log(`==> ${messages_thecoreloop.length} LAG posts found`, 0, 2);

      // Read thecoreloop_test messages
      plog.log(`Reading thecoreloop_test messages . . . `, 0, 0);
      const messages_test: TelegramMessage[] = await readMessages(client, "thecoreloop_test", number_array);
      plog.done(`Done`, 0, 1);
      plog.log(`==> ${messages_test.length} messages found`, 0, 1);

      // Parse LAG posts
      const messages_thecoreloop_test: string[] = [];
      for (const message of messages_test) {
        try {
          const lag: LAG = new LAG(message.text, message.id);
          messages_thecoreloop_test.push(message.text);
        } catch (error) {
          continue;
        }
      }
      plog.log(`==> ${messages_thecoreloop_test.length} LAG posts found`, 0, 2);

      // Compare number of messages
      if (messages_thecoreloop.length != messages_thecoreloop_test.length) throw Error("Uneven number of LAG posts");

      // Compare messages
      const messages_delta: string[] = [];
      plog.log(`Comparing messages . . . `, 0, 0);
      for (let i = 0; i < messages_thecoreloop.length; i++) {
        const message_a: string = messages_thecoreloop[i];
        const message_b: string = messages_thecoreloop_test[i];

        const lag_a: LAG = new LAG(message_a);
        const lag_b: LAG = new LAG(message_b);

        if (message_a != message_b) {
          const message_delta: string = `LAG #${lag_a.number}a and LAG #${lag_b.number}b differs`;
          messages_delta.push(message_delta);
        }
      }
      if (messages_delta.length == 0) plog.done(`All good!`, 0, 1);
      else {
        plog.alert(`${messages_delta.length} messages differ`, 0, 1);
        for (const message of messages_delta) plog.log(message, 1, 1);
        plog.log(``, 0, 1);
      }
    }
  }
}

main()
  .then(() => process.exit(0));

