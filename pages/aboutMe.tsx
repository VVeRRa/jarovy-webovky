import React from "react";
import styles from "../styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container1}>
        <a href={"/"}>
            <h1 className={styles.title}>Jardovo Truhlářství</h1>
        </a>      <br />
      <br />
      <p>
        K truhlařině jsem se dostal jako slepý k houslím a také jednoduše. Začal
        jsem v dílně vyrábět hračky a dětský nábytek pro svoje dvě malé dcerky.
        Nejprve potřebovaly stolek, pár židliček, postýlku a pak bylo potřeba
        udělat tam skříň a tam kuchyňku a už se to se mnou vezlo. Řekl jsem si,
        že v tomto řemesle budu pokračovat a zdokonalím se, jelikož mě baví.
        Našel jsem si práci ve stolárně, kde jsem svoji zálibu přenesl do
        profesionálního hlediska a tadá, dnes jsem tu pro Vás. Ovšem stále s
        láskou a citem k výrobkům, ke kterým mám vztah, stejně jako na začátku.
        Spokojení s mojí prací musíte být totiž nejenom vy, ale i já.
        <br />
        <br />
        S přátelským pozdravem,
        <br />
        <br />
        Jarda
      </p>
    </div>
  );
};

export default AboutMe;
