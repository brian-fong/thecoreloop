// Dependencies
import fs from "fs";
import path from "path";
const input = require("input");
import { LAG } from "../LAG";
import { CATEGORIES } from "../LAG";
import { TelegramClient } from "telegram";
import { createTelegramClient, getIndex, checkIndex, editMessage, readMessages } from "../telegram";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// String Session Token (used to skip Telegram authorization)
const string_session: string = process.env.TELEGRAM_STRING_SESSION!;

async function main(): Promise<void> {
  plog.log("===== Test: Check Categories =====", 0, 2);

  // Read LAG posts
  plog.log(`Reading LAG posts . . . `, 0, 1);
  let lag_missing: number[] = [];
  const FILEPATH_POSTS_DIR = path.join(__dirname, "../../LAG/posts/");
  const filenames_lag = fs.readdirSync(FILEPATH_POSTS_DIR);
  for (const filename of filenames_lag) {
    // Read lag-###.json file
    const filepath = path.join(FILEPATH_POSTS_DIR, filename);
    plog.log(`Reading file: /${filepath.split("/").slice(-4).join("/")} . . . `, 1, 0);
    const lag: LAG = JSON.parse(fs.readFileSync(filepath, { encoding: "utf-8" }));
    plog.done(`Done`, 0, 1);

    // Official categories
    const categories: string[] = Object.keys(CATEGORIES);
    // Collect categories found in given LAG post
    const categories_found: string[] = lag.content.map(category_group => category_group.category);

    // Check for invalid categories in given LAG post
    plog.log(`Checking categories . . . `, 2, 0);
    let invalid_categories: string[] = [];
    for (const category_found of categories_found) {
      for (const category of categories) {
        // if emoji exists in found category, then check if the 
        //    category found exists in the list of official categories 
        const emoji_1: string = category.substring(0, 1);
        if (category_found.includes(emoji_1)) {
          if (!categories.includes(category_found)) {
            invalid_categories.push(category_found);
          } else break;
        }
      }
    }
    if (invalid_categories.length == 0) plog.done("All good", 0, 1);
    else {
      plog.alert(`${invalid_categories.length} invalid categories found`, 0, 1);
      for (const invalid_category of invalid_categories) {
        plog.log(`Category: ${invalid_category}`, 2, 1);
      }
    }
  }
  plog.log(`Finished`, 0 , 2);
}

main()
  .then(() => process.exit(0));

