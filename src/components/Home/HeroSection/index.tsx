import { HeroBadge, HeroFirstImage, heroSecondImage } from "assets";
import { Button } from "components/subComponents";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroBG}>
      <div className={`appContainer ${styles.heroContainer}`}>
        <div className={styles.textSection}>
          <h1>Digital Agency with a different twist</h1>
          <p>
            We have the right expertise in helping organizations overcome
            critical organizational challenges to deliver productivity gains,
            increase staff retention and improve work performance
          </p>
          <Button
            text="Get Started"
            type="green"
            size="large"
            onClick={() => console.log("get started")}
          />
        </div>
        <div className={styles.imageSection}>
          <HeroFirstImage className={styles.firstImage} />
          <img src={heroSecondImage} alt="" className={styles.secondImage} />
          <HeroBadge className={styles.heroBadge} title="created for ambitous business" />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
