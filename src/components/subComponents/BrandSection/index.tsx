import {
  InterswitchLogo,
  KudaLogo,
  PatriciaLogo,
  ThePeerLogo,
  UBALogo,
} from "assets";
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
      </div>
    </section>
  );
};

export { BrandSection };
