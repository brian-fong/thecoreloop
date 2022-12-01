// Dependencies
import { Date } from "./helper/date";

// Initialize pretty-logger
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Define interface representing an entry in LAG post
export interface Entry {
  caption: string; 
  url: string;
}

// Define interface representing a group of entries in LAG post
export interface CategoryGroup {
  category: string; 
  entries: Entry[];
}

export interface StringMap {
  [key: string]: string;
}

// String array containing Categories keywords
export const CATEGORIES: StringMap = {
  "‼️ SPECIAL INSIGHTS 👀": "SPECIAL INSIGHTS",
  "🔦 Spotlight 🌟": "SPOTLIGHT",
  "🌊 MARKET ☎️": "MARKET",
  "🧠 Knowledge Hub 📚": "KNOWLEDGE HUB",
  "💎 Deep Dives 🔎": "DEEP DIVES",
  "🌈 Platforms 🏔": "PLATFORMS",
  "✨ Web 3️⃣ + Meta 🌎": "WEB3 + META",
  "💰 Fundraising 🧧": "FUNDRAISING",
  "👾 Game & Stats Releases 🎮": "GAME & STATS RELEASES",
};

export class LAG {
  // telegram_message: string = "N/A";
  heading: string = "N/A";
  telegram_message_id: number = -1;
  number: number;
  date: string = "N/A";
  content: CategoryGroup[] = [];

  constructor(message: string, telegram_message_id: number) {
    // Assign Telegram message and message ID
    // this.telegram_message = message;
    this.telegram_message_id = telegram_message_id;

    // Split message line-by-line
    const lines: string[] = message
      .split("\n")
      .filter(line => line.length > 1)
      .map(line => line.trim());

    // Assign heading (assume 1st line)
    const heading: string = lines[0];

    // Parse LAG number and assign corresponding property
    const hashtag_index: number = heading.indexOf("#");
    if (hashtag_index >= 0) {
      const ending_index: number = heading.indexOf(" ", hashtag_index);
      const number: number = Number(heading.slice(hashtag_index+1, ending_index));
      this.number = number;
    } else throw Error("LAG number not found!");

    // Assing heading property 
    this.heading = `LAG #${this.number}`;

    // Parse date and assign corresponding property
    try {
      const date: Date = new Date(heading);
      this.date = date.toString();
    } catch (error) {
      throw Error("LAG date not found!");
    }

    // Parse category indices
    let category_indices: number[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (isCategory(line)) category_indices.push(i);
    }

    if (category_indices.length == 0) throw Error("No categories found");

    // Organize content within LAG post
    let content: CategoryGroup[] = [];  // Initialize content array
    for (let j = 0; j < category_indices.length-1; j++) {
      // Assign current category index and category
      const current_index: number = category_indices[j]
      const category: string = lines[current_index];

      // Instantiate <CategoryGroup> object
      let category_group: CategoryGroup = {
        category: category,
        entries: [],
      };

      // Assign next category index (end of for-loop)
      let next_index: number = 0;
      if (j < category_indices.length-1) next_index = category_indices[j+1];
      else next_index = lines.length-1;

      // Handle SPECIAL INSIGHTS category 
      if (category == "‼️ SPECIAL INSIGHTS 👀") {
        // Assign caption
        const caption: string = lines.slice(current_index+1, next_index).join("\n");

        // Instantiate <Entry> object
        const entry: Entry = {
          caption: caption,
          url: "N/A",
        };
        
        // Append Entry to CategoryGroup entries array
        category_group.entries.push(entry);
      } else {
        // Check if there is an even number of lines between categories
        if (Math.abs(current_index+1 - next_index) % 2 != 0) throw Error(`Uneven number of captions & URLs under category: ${category}`);

        // Iterate through captions & URLs
        for (let k = current_index+1; k < next_index-1; k+=2) {
          // Assign caption & URL
          const caption: string = lines[k];
          const url: string = lines[k+1];

          if (!isURL(url)) throw Error(`Invalid URL: ${url}`);

          // Instantiate <Entry> object
          const entry: Entry = {
            caption: caption, 
            url: url,
          };

          // Append Entry to CategoryGroup entries array
          category_group.entries.push(entry);
        }
      }

      // Append CategoryGroup to content array
      content.push(category_group);
    }

    // Assign content property
    this.content = content;
  }
}

// Check if given string contains keyphrases
export function isCategory(line: string): boolean {
  // Check if a category has been found
  let category_found = false;
  const categories = Object.keys(CATEGORIES);
  for (const category of categories) {
    const keywords: string[] = category
      .split(" ")
      .filter(word => word.length > 0)
      .map(word => word.toLowerCase());

    // Check if each category keyword is present in line
    for (const keyword of keywords) {
      if (line.toLowerCase().includes(keyword)) keywords.shift();
      if (keywords.length == 0) category_found = true;
    }
    if (category_found) break;
  }

  // If category found, check if line is exact match to official category
  if (category_found && !categories.includes(line)) category_found = false;
  
  return category_found;
}

// Check if given string contains a URL
export function isURL(line: string): boolean {
  return Boolean(new URL(line));
}

// Check if LAG post contains a Spotlight article 
export function hasSpotlight(line: string): boolean {
  return true;
}

