import { AboutHeroCurveBG } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.heroContainer}`}>
        <p className={styles.subTxt}>About Us</p>
        <h1 className={styles.ttl}>Digital Agency with a different twist</h1>
        <p className={styles.txt}>
          Clearview Advisory is an Indigenous Startup Business Management and
          Advisory company founded in Lagos, focused on redefining HR Practices
          in Nigeria and Africa at large; using novel ideas, creative thinking
          and the application of technology, ClearView seeks to fill the gap in
          the business space by providing cutting edge and affordable business
          consultancy and coaching services to Small, Medium and Large scale
          enterprises.
        </p>
      </div>
      <AboutHeroCurveBG className={styles.curve} />
    </section>
  );
};

export { HeroSection };
