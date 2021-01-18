import React from "react";
import styles from "../../styles/GalleryOverview.module.scss";
import Link from "next/link";
import {dataForGallery} from "../../components/config/dataForGallery";

const GalleryOfPictures = ({  }) => {
  return (
    <div className={styles.container}>
        <a href={"/"}>
            <h1 className={styles.title}>Jardovo Truhlářství</h1>
        </a>      <br />
      <br />
      <div className={styles.gallery}>
        {dataForGallery.map(data => <Link href={data.href}>
          <a className={` ${styles.galleryItem} ${data.imageGridClassName}`}>
            <img className={styles.galleryImg}
                 src={data.src}
                 alt={data.alt}
            />
            <p>{data.p}</p>
          </a>
        </Link>)}
      </div>
    </div>
  );
};

export default GalleryOfPictures;
