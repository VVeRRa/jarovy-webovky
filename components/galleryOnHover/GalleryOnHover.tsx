import React from 'react';
import styles from "../../styles/GalleryOnHover.module.scss";

 const GalleryOnHover = () => {
    return (
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
    );
};

export default GalleryOnHover