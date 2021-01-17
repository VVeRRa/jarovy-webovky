import React from "react";
import styles from "../../styles/GalleryOverview.module.scss";
import Link from "next/link";

const GalleryOfPictures = ({  }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jardovo Truhlářství</h1>
      <br />
      <br />
      <div className={styles.gallery}>
        <Link href={"gallery/customMotoricCube"} >
          <a  className={` ${styles.galleryItem} ${styles.galleryItem1}`}>
            <img className={styles.galleryImg}
                src={"/gallery/customMotoricCube/IMG_20201212_185548.jpg"}
                alt={"Zakázka motorická kostka"}
            />
            <p >Zakázka motorická kostka</p>
          </a>
        </Link>
        <Link href={"gallery/oakSelfBearingStairs"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem3}`}>
            <img className={styles.galleryImg}
              src={"/gallery/oakSelfBearingStairs/IMG_20200908_172028.jpg"}
              alt={"Dubové samonosné schody"}
            />
            <p>Dubové samonosné schody</p>
          </a>
        </Link>
        <Link href={"gallery/customChildrenBed"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem2}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customChildrenBed/IMG_20210111_171400.jpg"}
              alt={"Zakázka detská postýlka"}
            />
            <p>Zakázka detská postýlka</p>
          </a>
        </Link>
        <Link href={"gallery/customChildrenChangingRoom"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem6}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customChildrenChangingRoom/IMG_20210112_093903.jpg"}
              alt={"Zakázka detská šatnička"}
            />
            <p> Zakázka detská šatnička</p>
          </a>
        </Link>
        <Link href={"gallery/customWoodenGardenHouse"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem10}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customWoodenGardenHouse/IMG_20200501_185231.jpg"}
              alt={"Zakázka zahradní dřevěný domeček"}
            />
            <p> Zakázka zahradní dřevěný domeček</p>
          </a>
        </Link>
        <Link href={"gallery/customChildrenShelf"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem4}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customChildrenShelf/IMG_20200706_155928.jpg"}
              alt={"Zakázka detská polička"}
            />
            <p> Zakázka detská polička</p>
          </a>
        </Link>
        <Link href={"gallery/customSpruceBed"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem7}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customSpruceBed/IMG_20201101_151307.jpg"}
              alt={"Zakázka postel masiv smrk"}
            />
            <p> Zakázka postel masiv smrk</p>
          </a>
        </Link>
        <Link href={"gallery/customTableAndChairs"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem8}`}>
            <img className={styles.galleryImg}
              src={"/gallery/customTableAndChairs/IMG_20200909_044309.jpg"}
              alt={"Zakázka stolek a židle"}
            />
            <p> Zakázka stolek a židle</p>
          </a>
        </Link>
        <Link href={"gallery/gardenHouseWithRhombusCasing"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem9}`}>
            <img className={styles.galleryImg}
              src={"/gallery/gardenHouseWithRhombusCasing/IMG_20200709_113447.jpg"}
              alt={"Zahradní domek a obklad rhombus"}
            />
            <p>Zahradní domek a obklad rhombus</p>
          </a>
        </Link>
        <Link href={"gallery/larchFence"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem5}`}>
            <img className={styles.galleryImg}
              src={"/gallery/larchFence/IMG_20200522_160359.jpg"}
              alt={"Modřínový plot"}
            />
            <p>Modřínový plot</p>
          </a>
        </Link>
        <Link href={"gallery/larchShelter"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem11}`}>
            <img className={styles.galleryImg}
              src={"/gallery/larchShelter/IMG_20200713_173117.jpg"}
              alt={"Modřínový přístřešek"}
            />
            <p>Modřínový přístřešek</p>
          </a>
        </Link>
        <Link href={"gallery/larchTerrace"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem13}`}>
            <img className={styles.galleryImg}
              src={"/gallery/larchTerrace/IMG_20200528_144914.jpg"}
              alt={"Modřínová terasa"}
            />
            <p>Modřínová terasa</p>
          </a>
        </Link>
        <Link href={"gallery/porchWithFollowupCasing"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem12}`}>
            <img className={styles.galleryImg}
              src={"/gallery/porchWithFollowupCasing/IMG_20201029_142513.jpg"}
              alt={"Přístřešek pro rodinný dům a následný obklad"}
            />
            <p>Přístřešek pro rodinný dům a následný obklad</p>
          </a>
        </Link>

      </div>
    </div>
  );
};

export default GalleryOfPictures;
