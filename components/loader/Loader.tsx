import React from "react";
import loaderStyles from "../../styles/Loader.module.scss";
const Loader = () => {
  return (
    <section id={"section"}>
      <div id={"div"}>
      <div className={loaderStyles.assembly}>
        <div className={loaderStyles.block}>
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
        </div>
        <div className={loaderStyles.block}>
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
        </div>
        <div className={loaderStyles.block}>
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
        </div>
        <div className={loaderStyles.block}>
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
        </div>
        <div className={loaderStyles.block}>
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
          <div className={loaderStyles.block__face} />
        </div>
        </div>

      </div>
    </section>
  );
};

export default Loader;
