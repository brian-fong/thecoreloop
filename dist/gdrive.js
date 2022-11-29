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
exports.parseCategoriesSheet = exports.readSheet = void 0;
// === Dependencies ===
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pretty_log_1 = __importDefault(require("./pretty-log"));
const googleapis_1 = require("googleapis");
const local_auth_1 = require("@google-cloud/local-auth");
// Initialize Logger 
const plog = new pretty_log_1.default(2);
// Set scope (read-only)
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// GDrive credentials
const TOKEN_PATH = path_1.default.join(__dirname, "../auth/token-0xfrian.json");
const CREDENTIALS_PATH = path_1.default.join(__dirname, "../auth/credentials-0xfrian.json");
// Read credentials from token.json
function loadToken() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // plog.log("Loading Google API credentials . . . ", 1, 0);
            const content = fs_1.default.readFileSync(TOKEN_PATH, { encoding: "utf-8" });
            const credentials = JSON.parse(content);
            const client = googleapis_1.google.auth.fromJSON(credentials);
            // plog.done("Done", 0, 2);
            return client;
        }
        catch (error) {
            // plog.error("JSON file containing Google API credentials not found!", 0, 1);
            // plog.log("Saving Google API credentials to JSON file . . . ", 1, 0);
            const auth_client = yield (0, local_auth_1.authenticate)({ scopes: SCOPES, keyfilePath: CREDENTIALS_PATH });
            if (auth_client.credentials)
                yield saveCredentials(auth_client);
            // plog.done("Done", 0, 1);
            // plog.log("Trying to load Google API credentials again . . . ", 1, 0);
            const content = fs_1.default.readFileSync(TOKEN_PATH, { encoding: "utf-8" });
            const credentials = JSON.parse(content);
            const client = googleapis_1.google.auth.fromJSON(credentials);
            // plog.done("Done", 0, 1);
            return client;
        }
    });
}
// Save credentials to token.json
function saveCredentials(client) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = fs_1.default.readFileSync(CREDENTIALS_PATH, { encoding: "utf-8" });
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
            type: "authorized_user",
            client_id: key.client_id,
            client_secret: key.client_secret,
            refresh_token: client.credentials.refresh_token,
        }, null, 4);
        fs_1.default.writeFileSync(TOKEN_PATH, payload);
    });
}
// Read Google Sheet data
function readSheet(sheet_id) {
    return __awaiter(this, void 0, void 0, function* () {
        // Authenticate Google credentials
        let client = yield loadToken();
        // If credentials do exist
        if (client) {
            try {
                // Initialize Google Sheets object
                const gsheets = googleapis_1.google.sheets({ version: "v4", auth: client });
                // Fetch Google Sheets names
                const params_getSheet = { spreadsheetId: sheet_id };
                const data = (yield gsheets.spreadsheets.get(params_getSheet)).data.sheets;
                let sheet_names = data.map((sheet) => sheet.properties.title);
                let google_sheets = [];
                for (let i = 0; i < sheet_names.length; i++) {
                    const sheet_name = sheet_names[i];
                    // Read Google Sheets values
                    const params_getValues = { spreadsheetId: sheet_id, ranges: [sheet_name] };
                    const values = (yield gsheets.spreadsheets.values.batchGet(params_getValues)).data.valueRanges;
                    let google_sheet = {
                        name: sheet_name,
                        table: [],
                    };
                    google_sheet.table = values[0].values;
                    google_sheets.push(google_sheet);
                }
                return google_sheets;
            }
            catch (error) {
                console.log("Some error occurred while using Google Sheets API");
                console.log(error);
                return [];
            }
        }
        return [];
    });
}
exports.readSheet = readSheet;
function parseCategoriesSheet(table) {
    let categories = {};
    for (let i = 2; i < table.length; i++) {
        const order = Number(table[i][1]);
        const category = table[i][2];
        categories[category] = order;
    }
    return categories;
}
exports.parseCategoriesSheet = parseCategoriesSheet;
;
