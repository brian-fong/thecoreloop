// Dependencies
require("dotenv").config();
import { JSONClient } from "google-auth-library/build/src/auth/googleauth";
import { GoogleSheet, loadToken, readSheet, parseCategoriesSheet } from "../gdrive";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

async function main() {
  plog.log("===== Test: Google Drive =====", 0, 2);

  // Instantiate Google Drive client
  const client: JSONClient = await loadToken();

  // Read Google Sheets
  const SHEET_ID = process.env.SHEET_ID!; // Google Sheet ID
  plog.log(`Reading Google Sheets: ${SHEET_ID} . . . `, 0, 0);
  const sheets: GoogleSheet[] = await readSheet(client, SHEET_ID);
  plog.done("Done", 0, 2);

  // Console-log Categories sheet
  const categories_sheet = sheets[0];
  plog.log(`Sheet: ${categories_sheet.name}`, 0, 1);
  const categories = parseCategoriesSheet(categories_sheet.table);
  plog.log("Categories: ", 0, 1);
  plog.tree(categories);
}

main()
  .then(() => process.exit(0));

