import {
  BrandBadge,
  BrandCurveBG,
  InterswitchLogo,
  KudaLogo,
  PatriciaLogo,
  ThePeerLogo,
  UBALogo,
} from "assets";
import { Button } from "components/subComponents";
import * as React from "react";
import styles from "./styles.module.css";

const BrandSection = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.brandContainer}`}>
        <h2>We have worked with leading brands and they trust us</h2>
        <div className={styles.logoSec}>
          <UBALogo title="UBA logo" />
          <InterswitchLogo title="Interswitch logo" />
          <KudaLogo title="Kuda logo" />
          <ThePeerLogo title="The peer logo" />
          <PatriciaLogo title="Patricia logo" />
        </div>
        <div className={styles.videoSec}>
          <BrandBadge
            className={styles.badge}
            title="created for ambitous business"
          />
        </div>
        <p>We connect your businesses with your target</p>
        <Button
          text="Contact us"
          type="green"
          size="large"
          onClick={() => console.log("get started")}
        />
      </div>
      <BrandCurveBG className={styles.curve} />
    </section>
  );
};

export { BrandSection };
