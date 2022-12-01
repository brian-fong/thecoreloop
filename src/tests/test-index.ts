// Dependencies
const input = require("input");
import { LAG } from "../LAG";
import { TelegramClient } from "telegram";
import { createTelegramClient, getIndex, checkIndex, editMessage, readMessages } from "../telegram";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Index =====", 0, 2);

  interface Choice {
    name: string, 
    value: number,
  }

  const main_menu: Choice[] = [
    {
      name: "Read & parse Telegram messages",
      value: 0,
    }, 
    {
      name: "Update categories across Telegram history",
      value: 1,
    }
  ];
  const main_input: number[] = await input.checkboxes(
    "Greetings. Select from the following options: ", 
    main_menu, 
  );

  if (main_input.length > 0) {
    // Connect to Telegram
    plog.log("Connecting to Telegram . . . ", 0, 1);
    const client: TelegramClient = await createTelegramClient(string_session);
    plog.done(`Successfully connected to Telegram!`, 0, 2);

    for (const user_choice of main_input) {
      // Read & parse Telegram messages
      if (user_choice == 0) {
        // Get Telegram Index
        plog.log(`Fetching Telegram Index . . . `, 0, 0);
        const telegram_index = await getIndex(client, true);
        plog.log(`Finished`, 0, 2);

        // Check Telegram Index
        plog.log(`Checking Telegram Index . . . `, 0 , 0);
        const missing_LAG_numbers: number[] = checkIndex(telegram_index);
        if (missing_LAG_numbers.length > 0) {
          plog.alert(`Missing LAG posts: ${missing_LAG_numbers.join(", ")}`, 0, 2);
          return;
        } else {
          plog.done(`All good`, 0, 2);
        }
      }
    }
  }
}

main()
  .then(() => process.exit(0));

