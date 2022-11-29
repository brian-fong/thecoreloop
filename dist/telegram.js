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
exports.readMessages = void 0;
// Dependencies
require('dotenv').config();
const input = require("input");
const pretty_log_1 = __importDefault(require("./pretty-log"));
const telegram_1 = require("telegram");
const Logger_1 = require("telegram/extensions/Logger");
const sessions_1 = require("telegram/sessions");
// Initialize pretty logger
const plog = new pretty_log_1.default(2);
// Telegram API keys
const API_ID = Number(process.env.TELEGRAM_API_ID);
const API_HASH = process.env.TELEGRAM_API_HASH;
// String Session Token (used to skip Telegram authorization)
const string_session = process.env.TELEGRAM_STRING_SESSION;
function readMessages(id_numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        // Start Telegram client
        const client = new telegram_1.TelegramClient(new sessions_1.StringSession(string_session), API_ID, API_HASH, { connectionRetries: 5 });
        // Disable Telegram logging
        const log_level = Logger_1.LogLevel.NONE;
        client.setLogLevel(log_level);
        // Authorize log-in credentials (terminal-input)
        yield client.start({
            phoneNumber: () => __awaiter(this, void 0, void 0, function* () { return yield input.text("Phone Number (include +1 for US): "); }),
            password: () => __awaiter(this, void 0, void 0, function* () { return yield input.password("Password: "); }),
            phoneCode: () => __awaiter(this, void 0, void 0, function* () { return yield input.text("Authentication Code (sent via Telegram): "); }),
            onError: (error) => plog.error(`Error: ${error}`, 0, 2),
        });
        // Connect to Telegram
        try {
            // plog.log("Connecting to Telegram . . . ", 0, 1);
            yield client.connect();
            // plog.done(`Successfully connected!`, 0, 2);
            // plog.log(`Session String: "${client.session.save()}"`, 0, 2);
        }
        catch (error) {
            plog.error(`${error}`, 1, 2);
            return [];
        }
        // Read Telegram messages
        let message_ids = [];
        for (const id_number of id_numbers) {
            const message_id = new telegram_1.Api.InputMessageID({ id: id_number });
            message_ids.push(message_id);
        }
        // TODO: Assign more specific type to message variable
        const channel_name = "thecoreloop";
        const response = yield client.invoke(new telegram_1.Api.channels.GetMessages({
            channel: channel_name,
            id: message_ids,
        }));
        let messages = [];
        for (const message of response.messages) {
            const text = message.message;
            if (text)
                messages.push(text);
        }
        return messages;
    });
}
exports.readMessages = readMessages;
