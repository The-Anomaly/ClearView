import { AboutHeroCurveBG } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.heroContainer}`}>
        <p className={styles.subTxt}>Contact Us</p>
        <h1 className={styles.ttl}>We’d love to hear from you</h1>
        <p className={styles.txt}>Our friendly team is always here to chat</p>
      </div>
      <AboutHeroCurveBG className={styles.curve} />
    </section>
  );
};

export { HeroSection };
