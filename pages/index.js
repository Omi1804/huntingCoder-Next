import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Code</title>
        <meta name="description" content="Explore the world of coding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.heroSection}>
          <Image
            className={styles.heroImg}
            src="/homeImg2.jpeg"
            alt="Home Image"
            layout="fill"
            objectFit="cover"
          />
          <h1 className={styles.mainHeading}>Welcome to the Hunting Code</h1>
        </div>
      </main>
    </>
  );
}
