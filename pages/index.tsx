import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React from "react";
import GalleryOnHover from "../components/galleryOnHover/GalleryOnHover";

export default function Home() {

  return (
    <>
      <div className={styles.container1} style={{}}>
        <Head>
          <title>Jardovo Truhlářství</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>

        <main className={styles.main}>
          <h2>Vítejte na stránce</h2>
          <h1 className={styles.title}>Jardovo Truhlářství</h1>
          <h2>Výroba atypického nábytku na míru.</h2>
          <div className={styles.grid}>
            <a href="/aboutMe" className={`${styles.card} ${styles.radial} `}>
              <h3>O mně</h3>
            </a>
            <a href="/gallery" className={`${styles.card} ${styles.radial}`}>
              <GalleryOnHover/>
            </a>
            <a href="/contact" className={`${styles.card} ${styles.radial} `}>
              <h3>Kontakt</h3>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
}
