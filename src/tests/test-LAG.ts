// Dependencies
import { LAG } from "../LAG";

// Initialize pretty-logger
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

async function main() {
  plog.log("===== Test: LAG =====", 0, 2);

  try {
    // Sample message
    const message = "Look at Gaming #22 | Friday April 20th 2022";
    plog.log(`Sample LAG Post: ${message}`, 0, 2);

    // Instantiate <LAG> object
    plog.log("Creating LAG instance . . . ", 0, 0);
    const lag: LAG = new LAG(message);
    plog.done("Done", 0, 2);

    // Console-log LAG properties
    plog.log("LAG Properties: ", 0, 1);
    plog.log(`- Heading: ${lag.heading}`, 1, 1);
    plog.log(`- Number: ${lag.number}`, 1, 1);
    plog.log(`- Date: ${lag.date}`, 1, 1);
    plog.log("", 0, 1);
  } catch (error) {
    plog.error(`${error}`, 0, 2);
  }
}

main()
  .then(() => process.exit(0));

