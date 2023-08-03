import React from "react";
import styles from "./TCL_Logo.module.css";

export default function TCL_Logo(): React.ReactElement {
  return (
    <div className={`tcl-container purple ${styles["logo"]}`}>
      <div className={styles["img-container"]}>
        <img
          className={styles["logo-img"]}
          src="/thecoreloop-logo-transparent.png"
        />
      </div>

      <p className={styles["quote"]}>
        UI Inspired by{" "}
        <a
          href="https://classic.curve.fi/"
          className={styles["curve-link"]}
          target="_blank"
        >
          Curve Finance (Classic)
        </a>
      </p>
    </div>
  );
}
