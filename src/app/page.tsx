import styles from "@/components/core/TCL_Labs.module.css";


export default function Home() {
  return (
    <main className={styles["tcl-labs"]}>
      <img
        className={styles["tcl-labs"]}
        src="/tcl-labs.png"
        width="600px"
        height="auto"
        draggable={false}
      />

      <h1 className={styles["tcl-heading"]}>
        thecoreloop.gg undergoing construction 🏗️
      </h1>
    </main>
  );
}
