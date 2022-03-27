import {
  BrandBadge,
  BrandCurveBG,
} from "assets";
import { Button } from "components/subComponents";
import * as React from "react";
import styles from "./styles.module.css";

const VideoSection = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`appContainer ${styles.brandContainer}`}>
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

export { VideoSection };
