// === Input ===
// Choice: object representing choice(s) for the user to choose
export interface Choice {
  name: string, 
  value: number,
}


// === Telegram ===
// TelegramMessage: object representing a Telegram message 
export interface TelegramMessage {
  text: string, 
  id: number,
}


// === LAG ===
// CategoryGroup: object containing string representing category and 
//   array of Entry objects representing articles/tweets under said category
export interface CategoryGroup {
  category: string; 
  entries: Entry[];
}

// Entry: object with caption and URL properties, representing an article or 
//   tweet mentioned in a LAG post
export interface Entry {
  caption: string; 
  url: string;
}

// StringMap: dictionary of key-value pairs of <string> type
export interface StringMap {
  [key: string]: string;
}

// CATEGORIES: String array containing official LAG categories
export const CATEGORIES: StringMap = {
  "SPECIAL INSIGHTS": "‼️ SPECIAL INSIGHTS 👀",
  "SPOTLIGHT": "🔦 Spotlight 🌟",
  "MARKET": "🌊 MARKET ☎️",
  "DEEP DIVES": "💎 Deep Dives 🔎",
  "PLATFORMS": "🌈 Platforms 🏔",
  "WEB3 + META": "✨ Web 3️⃣ + Meta 🌎",
  "KNOWLEDGE HUB": "🧠 Knowledge Hub 📚",
  "FUNDRAISING": "💰 Fundraising 🧧",
  "GAME & STATS RELEASES": "👾 Game & Stats Releases 🎮",
};

