import React, { useEffect, useState } from "react";
import styles from "@/components/link-preview/Link_Preview.module.css";

export default function Link_Preview(): React.ReactElement {

  const [link, setLink] = useState<string>("");
  const [preview, setPreview] = useState<any>({});

  useEffect(() => {
    console.log("Preview: ", JSON.stringify(preview, null, 4));
  }, [preview]);

  async function handlePreview() {
    console.log("Fetching metadata...");
    const api_route: string = "/api/fetch-metadata";
    const response = await fetch(api_route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link }),
    });
    const data = await response.json();
    setPreview({ ...data });
  }

  return (
    <div className="tcl-container gray">
      <h2>
        Preview Link
      </h2>

      <div className={styles["row"]}>
        <label
          className={styles["link"]}
          htmlFor="link"
        >
          Link:
        </label>
        <input
          id="link"
          type="text"
          placeholder="https://www.google.com/"
          autoFocus={true}
          autoComplete="off"
          value={link}
          onChange={(e) => setLink(e.currentTarget.value)}
        />
        <button
          className={styles["preview"]}
          onClick={handlePreview}
        >
          Preview
        </button>
      </div>

      <div>
        <label className={styles["link"]}>
          Preview:
        </label>
        <div className={styles["preview-section"]}>
          {JSON.stringify(preview, null, 2)}
        </div>
      </div>
    </div>
  );
}
