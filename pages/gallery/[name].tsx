import React from "react";
import { useRouter } from "next/router";
import fs from "fs";
import { promisify } from "util";
import Gallery from "react-grid-gallery";

import styles from "../../styles/Home.module.scss";
import Loader from "../../components/loader/Loader";
import { base64Img } from "../../public/gallery/base64Img";

const t = {
  oakSelfBearingStairs: "Dubové samonosné schody",
  customChildrenBed: "Zakázka detská postýlka",
  customChildrenChangingRoom: "Zakázka detská šatnička",
  customWoodenGardenHouse: "Zakázka zahradní dřevěný domeček",
  customChildrenShelf: "Zakázka detská polička",
  customSpruceBed: "customBed masiv smrk",
  customTableAndChairs: "akázka stolek a židle",
  gardenHouseWithRhombusCasing: "Zahradní domek a obklad rhombus",
  larchFence: "Modřínový plot",
  larchShelter: "Modřínový přístřešek",
  larchTerrace: "Modřínová terasa",
  porchWithFollowupCasing: "Přístřešek pro rodinný dům a následný obklad",
  customMotoricCube: "Zakázka motorická kostka",
  customRailings:"Zakázka zábradlí",
  customBuiltInCabinetForTv:"Zakázka vestavěná skříň na Tv",
  customChangingTable:"Zakázka přebalovací pult",
  customBed:"Zakázka postel",
  customChildrenKitchenette:"Zakázka dětská kuchyňka",
  customChildrenSwing:"Zakázka dětská houpačka",
  customBeechTreadsForBalconyDoors:"Zakázka bukové nášlapy k balkónovým dveřím",
  motoricCube:"Motorická kostka"



};

const Name = ({ photos }) => {
  const router = useRouter();
  const { name } = router.query;

  const IMAGES = photos.map((photo) => ({
    src: `./${name}/${photo}`,
    thumbnail: `./${name}/${photo}`,
    thumbnailWidth: "auto",
    thumbnailHeight: "auto",
    isSelected: false,
    caption: "",
    nano: base64Img,
  }));

  return (
    <>
      {!router ? (
        <Loader />
      ) : (
        <div className={styles.container1}>
          <h1 className={styles.title}>Jardovo Truhlářství</h1>
          <h3>{t[name as string]}</h3>
          <div
            style={{
              display: "block",
              minHeight: "1px",
              width: "100%",
              overflow: "auto",
            }}
            className={styles.container}
          >
            <Gallery
              images={IMAGES}
              showLightboxThumbnails={true}
              hoverColor={"rgba(0,0,0,0.54)"}
              parentHover={true}
              enableImageSelection={true}
              isSelected={false}
              margin={8}
              backdropClosesModal={true}
              theme={{
                container: {
                  background: "rgba(0, 0, 0, 0.8)",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            />
            <style jsx>{`
              .ReactGridGallery_tile {
                border: 1rem solid #fff;
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
};

export async function getStaticProps(context) {
  const readDirectory = promisify(fs.readdir);
  const result = await readDirectory(`./public/gallery/${context.params.name}`);
  return {
    props: {
      photos: result || [],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "customMotoricCube" } },
      { params: { name: "porchWithFollowupCasing" } },
      { params: { name: "larchTerrace" } },
      { params: { name: "larchShelter" } },
      { params: { name: "larchFence" } },
      { params: { name: "gardenHouseWithRhombusCasing" } },
      { params: { name: "customTableAndChairs" } },
      { params: { name: "customSpruceBed" } },
      { params: { name: "customChildrenShelf" } },
      { params: { name: "customWoodenGardenHouse" } },
      { params: { name: "customChildrenChangingRoom" } },
      { params: { name: "oakSelfBearingStairs" } },
      { params: { name: "customChildrenBed" } },
      { params: { name: "motoricCube" } },
      { params: { name: "customBeechTreadsForBalconyDoors" } },
      { params: { name: "customChildrenSwing" } },
      { params: { name: "customChildrenKitchenette" } },
      { params: { name: "customBed" } },
      { params: { name: "customChangingTable" } },
      { params: { name: "customBuiltInCabinetForTv" } },
      { params: { name: "customRailings" } },
    ],

    fallback: false,
  };
}

export default Name;
