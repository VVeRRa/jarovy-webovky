import React from "react";
import styles from "../styles/Contacts.module.scss";

const Contact = () => {
  return (
    <div className={styles.container1}>
      <a href={"/"}>
        <h1 className={styles.title}>Jardovo Truhlářství</h1>
      </a>
      <br />
      <br />
      <p>Email: jaroslavsobotka@post.cz</p>
      <br />
      <p>Tel: 731521917</p>
    </div>
  );
};
export default Contact;
