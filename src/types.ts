// Telegram Index: a dictionary consisting of key-value pairs where 
//   each key represents a Telegram message ID and each 
//   value represents the corresponding LAG # found
export interface TelegramIndex {
  [key: number]: number;
}

// Choice: object containing properties: name and value, representing 
//   choice(s) for the user to choose
export interface Choice {
  name: string, 
  value: number,
}

