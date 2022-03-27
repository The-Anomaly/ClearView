import { Button } from "components/subComponents";
import * as React from "react";
import styles from "./styles.module.css";

const Newsletter = () => {
  return (
    <section className={`appContainer ${styles.sectionBG}`}>
      <div className={styles.newsletterContainer}>
        <h6>Subscribe to our newsletter</h6>
        <p>we share useful information weekly</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <Button
            className={styles.btn}
            text="Subscribe"
            type="white"
            onClick={() => console.log("subscribe")}
          />
        </div>
      </div>
    </section>
  );
};

export { Newsletter };
