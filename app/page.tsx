import styles from "@/styles/Home.module.css";
import { TextField } from "@stoati/nextjs-tools";
const getData = async () => {
  const data = await fetch(
    "https://api.stoati.fr/shops/ac85caf1-b3b3-4c21-a919-6e1beb596066/components/data",
    {
      method: "GET",
      mode: "cors",
      headers: {
        authorization: `Bearer test`,
      },
    }
  );

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await data.json();
};

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        <TextField moduleName="title" />
      </h1>
    </div>
  );
}
