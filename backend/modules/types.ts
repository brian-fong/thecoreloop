// === General ===
// StringMap: dictionary of key-value pairs of <string> type
export interface StringMap {
  [key: string]: string;
}

// Choice: object representing choice(s) for the user to choose
export interface Choice {
  name: string, 
}


// === Telegram ===
// TelegramMessage: object representing a Telegram message 
export interface TelegramMessage {
  text: string, 
  id: number,
}

// Telegram Index: object whose keys are Telegram message IDs and
//   values are the corresponding LAG # found
export interface TelegramIndex {
  [key: number]: number;
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


