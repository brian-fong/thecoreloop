// === Dependencies ===
import fs from "fs";
import path from "path";
import { google, sheets_v4 } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { authenticate } from "@google-cloud/local-auth";
import { JSONClient } from "google-auth-library/build/src/auth/googleauth";

// Initialize pretty-logger 
import PrettyLogger from "./helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Set Google API scope (read-only)
const SCOPES: string[] = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

// Filepaths to Google Drive Credentials
const TOKEN_PATH: string = path.join(__dirname, "../auth/token-0xfrian.json");
const CREDENTIALS_PATH: string = path.join(__dirname, "../auth/credentials-0xfrian.json");

// Save credentials to token.json
async function saveCredentials(client: OAuth2Client): Promise<void> {
  // Read Google Drive credentials
  const content: string = fs.readFileSync(CREDENTIALS_PATH, { encoding: "utf-8" });
  const keys: {
    installed: object,
    web: object,
  } = JSON.parse(content);
  const key: {
    client_id?: string, 
    client_secret?: string, 
  } = keys.installed || keys.web;

  // Write token.json file
  const payload: string = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  }, null, 4);
  fs.writeFileSync(TOKEN_PATH, payload);
}

// Read credentials from token.json
export async function loadToken(): Promise<JSONClient> {
  try {
    // Read token.json file
    plog.log("Loading Google API credentials . . . ", 0, 0);
    const content: string = fs.readFileSync(TOKEN_PATH, { encoding: "utf-8" });
    const credentials: object = JSON.parse(content);
    
    // Instantiate <JSONClient> object
    const client: JSONClient = google.auth.fromJSON(credentials); 
    plog.done("Done", 0, 1);
    return client;
  } catch (error) {
    plog.error("JSON file containing Google API credentials not found!", 0, 1);
    // Save credentials to token.json file
    plog.log("Saving Google API credentials to JSON file . . . ", 1, 0);
    const auth_client: OAuth2Client = await authenticate({ scopes: SCOPES, keyfilePath: CREDENTIALS_PATH });
    if (auth_client.credentials) await saveCredentials(auth_client);
    plog.done("Done", 0, 1);

    // Retry reading token.json file and instantiating <JSONClient> object 
    plog.log("Trying to load Google API credentials again . . . ", 1, 0);
    const content: string = fs.readFileSync(TOKEN_PATH, { encoding: "utf-8" });
    const credentials: object = JSON.parse(content);
    const client: JSONClient = google.auth.fromJSON(credentials); 
    plog.done("Done", 0, 1);
    return client;
  }
}

// Read Google Sheet data
export async function readSheet(client: JSONClient, sheet_id: string): Promise<GoogleSheet[]> {
  // Initialize Google Sheets object
  const gsheets: sheets_v4.Sheets = google.sheets({ version: "v4", auth: client });
  
  // Fetch Google Sheets names
  const params_getSheet: object = { spreadsheetId: sheet_id };
  const data: sheets_v4.Schema$Sheet[] = (await gsheets.spreadsheets.get(params_getSheet)).data.sheets!;
  let sheet_names: string[] = data.map((sheet: sheets_v4.Schema$Sheet) => sheet!.properties!.title!);

  // Parse each tab in Google Sheet
  let google_sheets: GoogleSheet[] = [];
  for (let i = 0; i < sheet_names.length; i++) {
    const sheet_name: string = sheet_names[i];
    // Parse values
    const params_getValues: object = { spreadsheetId: sheet_id, ranges: [sheet_name] };
    const values: sheets_v4.Schema$ValueRange[] = (await gsheets.spreadsheets.values.batchGet(params_getValues)).data.valueRanges!;

    // Instantiate <GoogleSheet> object
    let google_sheet: GoogleSheet = {
      name: sheet_name, 
      table: [],
    };

    // Append to Google Sheets array
    google_sheet.table = values[0].values!;
    google_sheets.push(google_sheet);
  }

  return google_sheets;
}

// Extract categories from Categories tab in Google Sheets
export function parseCategoriesSheet(table: string[][]) {
  type Categories = {
    [key: string]: number,
  };

  // Append entry to Categories
  let categories: Categories = {};
  for (let i = 2; i < table.length; i++) {
    const order: number = Number(table[i][1]);
    const category: string = table[i][2];
    categories[category] = order;
  }

  return categories;
}

export interface GoogleSheet {
  name: string; 
  table: string[][];
};



