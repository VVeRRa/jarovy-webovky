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
        <Link href={"gallery/motoricCube"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem15}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/motoricCube/IMG_20200316_101135.jpg"}
                 alt={"Motorická kostka"}
            />
            <p>Motorická kostka</p>
          </a>
        </Link>
        <Link href={"gallery/customBeechTreadsForBalconyDoors"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem14}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customBeechTreadsForBalconyDoors/IMG_20200607_161416.jpg"}
                 alt={"Zakázka bukové nášlapy k balkónovým dveřím"}
            />
            <p>Zakázka bukové nášlapy k balkónovým dveřím</p>
          </a>
        </Link>
        <Link href={"gallery/customChildrenSwing"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem16}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customChildrenSwing/89767542_111197243832192_7907715157705359360_n.jpg"}
                 alt={"Zakázka dětská houpačka"}
            />
            <p>Zakázka dětská houpačka</p>
          </a>
        </Link>
        <Link href={"gallery/customChildrenKitchenette"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem21}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customChildrenKitchenette/IMG_20190317_194525.jpg"}
                 alt={"Zakázka dětská kuchyňka"}
            />
            <p>Zakázka dětská kuchyňka</p>
          </a>
        </Link>
        <Link href={"gallery/customBed"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem18}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customBed/IMG_20190317_130003.jpg"}
                 alt={"Zakázka postel"}
            />
            <p>Zakázka postel</p>
          </a>
        </Link>
        <Link href={"gallery/customChangingTable"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem19}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customChangingTable/IMG_20190503_062455.jpg"}
                 alt={"Zakázka přebalovací pult"}
            />
            <p>Zakázka přebalovací pult</p>
          </a>
        </Link>
        <Link href={"gallery/customBuiltInCabinetForTv"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem20}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customBuiltInCabinetForTv/IMG_20201024_142726.jpg"}
                 alt={"Zakázka vestavěná skříň na Tv"}
            />
            <p>Zakázka vestavěná skříň na Tv</p>
          </a>
        </Link>
        <Link href={"gallery/customRailings"}>
          <a className={` ${styles.galleryItem} ${styles.galleryItem17}`}>
            <img className={styles.galleryImg}
                 src={"/gallery/customRailings/IMG_20190924_184730.jpg"}
                 alt={"Zakázka zábradlí"}
            />
            <p>Zakázka zábradlí</p>
          </a>
        </Link>

      </div>
    </div>
  );
};

export default GalleryOfPictures;
