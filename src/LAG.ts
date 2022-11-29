// Dependencies
import { Date } from "./helper/date";

// String array containing Heading keywords
export const HEADINGS: string[] = [
  "Look at Games",
  "Look at Gaming",
]

// String array containing Categories keywords
export const CATEGORIES: string[] = [
  "‼️ SPECIAL INSIGHTS 👀",
  "🌊 MARKET ☎️ ",
  "💎 Deep Dives 🔎",
  "🌈 Platforms 🏔",
  "✨ Web 3️⃣ + Meta  🌎 ",
  "💰 Fundraising 🧧",
  "👾 Game & Stats Releases 🎮",
];

export class LAG {
  telegram_message: string = "N/A";
  telegram_message_id: number = -1;
  heading: string = "N/A";
  number: number = -1;
  date: Date;

  constructor(message: string, telegram_message_id: number = -1) {
    // Assign Telegram message and message ID
    this.telegram_message = message;
    this.telegram_message_id = telegram_message_id;

    // Split message line-by-line
    const lines: string[] = this.telegram_message
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    // Assign heading (assume first line)
    this.heading = lines[0];

    // Parse LAG number and assign corresopnding property
    const hashtag_index: number = this.heading.indexOf("#");
    if (hashtag_index >= 0) {
      const ending_index: number = this.heading.indexOf(" ", hashtag_index);
      const number: number = Number(this.heading.slice(hashtag_index+1, ending_index));
      this.number = number;
    } else throw Error("LAG number not found!");

    // Parse date and assign corresopnding property
    try {
      const date: Date = new Date(this.heading);
      this.date = date;
    } catch (error) {
      throw Error("LAG date not found!");
    }
  }
}

function isPerfectMatch(matches: boolean[]) {
  for (const match of matches) if (!match) return false;
  return true;
}

function containsKeyWords(line: string, keywords: string[]) {
  for (const heading of HEADINGS) {
    const keywords: string[] = heading
      .split(" ")
      .filter(word => word.length > 0);
    const matches: boolean[] = keywords.map(keyword => line.includes(keyword) ? true : false);
    if (isPerfectMatch(matches)) return true;
  }
  return false;
}

