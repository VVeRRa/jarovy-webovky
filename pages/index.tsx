import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React from "react";

export default function Home() {

  return (
    <>
      <div className={styles.container1}>
        <Head>
          <title>Jardovo Truhlářství</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>

        <main className={styles.main}>
          <h2>Vítejte na stránce</h2>
          <br />
          <br />
          <h1 className={styles.title}>Jardovo Truhlářství</h1>
          <br />
          <br />
          <h2>Výroba atypického nábytku na míru.</h2>
          <video className={styles.video} width="320" height="240" loop controls >
            <source src="/gallery/customMotoricCube/VID_20201213_175834.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
          </video>
          <div className={styles.grid}>
            <a href="/aboutMe" className={`${styles.card} ${styles.radial} `}>
              <h3>O mně</h3>
            </a>
            <a href="/gallery" className={`${styles.card} ${styles.radial}`}>
              <section style={{width:"100%", height: "100%"}}>
                <div className={styles.content}>
                  <h3>Galerie</h3>
                <div className={styles.containerPicture}>
                  <div className={styles.item}>
                    <div className={styles.previews}>
                      <div className={styles.previewImage}>
                        <img
                          alt={"Zakázka motorická kostka"}
                          src={"/gallery/customMotoricCube/IMG_20201212_185548.jpg"}
                        />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                            src={"/gallery/oakSelfBearingStairs/IMG_20200908_172028.jpg"}
                            alt={"Dubové samonosné schody"}/>
                      </div>
                      <div className={styles.previewImage}>
                        <img
                            src={"/gallery/customChildrenBed/IMG_20210111_171400.jpg"}
                            alt={"Zakázka detská postýlka"} />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                            src={"/gallery/customWoodenGardenHouse/IMG_20200501_185231.jpg"}
                            alt={"Zakázka zahradní dřevěný domeček"} />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                            src={"/gallery/customTableAndChairs/IMG_20200909_044309.jpg"}
                            alt={"Zakázka stolek a židle"}  />
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </section>
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

// pages - home - index.js /home
// pages - home.js - /home
