// Local Modules
import PrettyLogger from "../helper/pretty-log";
const plog: PrettyLogger = new PrettyLogger(2);

// Sets delay for <time> number of milliseconds
export default function sleep(time: number) {
  return new Promise( resolve => setTimeout(resolve, time) );
}

// Sets delay and logs every 10% increment
export async function logSleep(time: number) {
  const seconds = time / 1000;
  const increment: number = Math.ceil(time / 10);
  for (let i = 0; i < 10; i++) {
    plog.log(`Sleeping for ${seconds}s: [`, 0, 0);
    await sleep(increment);
    plog.log(`#`, 0, 0);
  }
}
