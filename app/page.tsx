import styles from "@/styles/Home.module.css";

import { TextField } from "@stoati/nextjs-tools";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <TextField componentId="1117ef55-f12d-407f-86a7-01f51a648284" />
      </h1>
    </div>
  );
}
