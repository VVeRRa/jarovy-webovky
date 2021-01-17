import Head from "next/head";
import styles from "../styles/Home.module.scss";

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
          <h3>Vítejte na stránce</h3>
          <br />
          <br />
          <h1 className={styles.title}>Jardovo Truhlářství</h1>
          <br />
          <br />
          <h2>Výroba atypického nábytku na míru.</h2>

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
                          alt={"1"}
                          src="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg"
                        />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                          alt={"13"}
                          src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
                        />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                          alt={"12"}
                          src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
                        />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                          alt={"14"}
                          src="https://cdn.fstoppers.com/styles/large/s3/lead/2018/07/take_better_shots_with_your_drone_landscape_photos.jpg"
                        />
                      </div>
                      <div className={styles.previewImage}>
                        <img
                          alt={"15"}
                          src="https://d31fr2pwly4c4s.cloudfront.net/8/6/c/1080632_0_landscape-photography_400.jpg"
                        />
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
