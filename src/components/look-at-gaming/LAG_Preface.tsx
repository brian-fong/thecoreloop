import React from "react";
import styles from "./LAG_Preface.module.css";


export default function LAG_Preface(): React.ReactElement {
  return (
    <div className={`tcl-container blue ${styles["preface"]}`}>
      <h2 className={styles["heading"]}>
        Look At Gaming (LAG)
      </h2>
    </div>
  );
}
