"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
require("dotenv").config();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pretty_log_1 = __importDefault(require("./pretty-log"));
const telegram_1 = require("./telegram");
const look_at_games_1 = require("./look-at-games");
// import { GoogleSheet, readSheet, extractCategories } from "./gdrive";
// Initialize logger
const plog = new pretty_log_1.default(2);
// Filepaths 
const FILEPATH_INDEX = path_1.default.join(__dirname, "../look-at-games/telegram-index.json");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Read Telegram Index 
            plog.log("Reading Telegram Index . . . ", 0, 0);
            const telegram_index = JSON.parse(fs_1.default.readFileSync(FILEPATH_INDEX, { encoding: "utf-8" }));
            plog.done("Done", 0, 2);
            // Read Telegram messages
            plog.log("Reading Telegram messages . . . ", 0, 0);
            const messages = yield (0, telegram_1.readMessages)(telegram_index);
            plog.done("Done", 0, 2);
            plog.log("Look at Games Posts: ", 0, 1);
            for (let i = 0; i < messages.length; i++) {
                const message = messages[i];
                const message_id = telegram_index[i];
                const lag = new look_at_games_1.LookAtGames(message, message_id);
                console.log(lag.heading);
            }
        }
        catch (error) {
            plog.error(error, 0, 2);
        }
    });
}
main()
    .then(() => process.exit(0));
