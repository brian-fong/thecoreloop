"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPerfectMatch = exports.LookAtGames = exports.CATEGORIES = exports.HEADINGS = void 0;
const date_1 = require("./date");
exports.HEADINGS = [
    "Look at Games",
    "Look at Gaming",
];
exports.CATEGORIES = [
    "‼️ SPECIAL INSIGHTS 👀",
    "🌊 MARKET ☎️ ",
    "💎 Deep Dives 🔎",
    "🌈 Platforms 🏔",
    "✨ Web 3️⃣ + Meta  🌎 ",
    "💰 Fundraising 🧧",
    "👾 Game & Stats Releases 🎮",
];
class LookAtGames {
    constructor(message, telegram_message_id = -1) {
        this.telegram_message = "N/A";
        this.telegram_message_id = -1;
        this.heading = "N/A";
        this.number = -1;
        this.date = "N/A";
        // Assign Telegram message and message ID
        this.telegram_message = message;
        this.telegram_message_id = telegram_message_id;
        // Split message line-by-line
        const lines = this.telegram_message
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);
        // Assign heading (assume first line)
        this.heading = lines[0];
        // Assign LAG number property
        const hashtag_index = this.heading.indexOf("#");
        if (hashtag_index >= 0) {
            const ending_index = this.heading.indexOf(" ", hashtag_index);
            const number = Number(this.heading.slice(hashtag_index + 1, ending_index));
            this.number = number;
        }
        else
            throw Error("LAG number not found!");
        // Assign date property
        try {
            const date = new date_1.Date(this.heading);
            this.date = date;
        }
        catch (error) {
            throw Error("LAG date not found!");
        }
    }
}
exports.LookAtGames = LookAtGames;
function isPerfectMatch(matches) {
    for (const match of matches)
        if (!match)
            return false;
    return true;
}
exports.isPerfectMatch = isPerfectMatch;
function containsKeyWords(line, keywords) {
    for (const heading of exports.HEADINGS) {
        const keywords = heading
            .split(" ")
            .filter(word => word.length > 0);
        const matches = keywords.map(keyword => line.includes(keyword) ? true : false);
        if (isPerfectMatch(matches))
            return true;
    }
    return false;
}
