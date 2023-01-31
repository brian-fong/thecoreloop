import { useRef, useState, useEffect } from "react";
import wait from "../utils/wait";

export default function useFetchMetadata() {
  const [fetching, set_fetching] = useState<boolean>(false);
  const lag_meta = useRef<any>({});

  async function start_fetching() {
    await wait(200);
    set_fetching(true);
  }
  
  async function end_fetching() {
    await wait(200);
    set_fetching(false);
  }

  useEffect(() => {
    console.log("Status: ", fetching ? "Fetching" : "Cancelled");
  }, [fetching]);

  return { fetching, start_fetching, end_fetching, lag_meta };
}

