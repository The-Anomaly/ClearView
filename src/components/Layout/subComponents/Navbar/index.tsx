import { ClearViewWhite } from "assets";
import { Button } from "components/subComponents";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <section className={styles.navBG}>
      <div className={`appContainer ${styles.navWrapper}`}>
        <ClearViewWhite className={styles.navLogo} title="clear view" />
        <nav className={styles.navList}>
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
        </nav>
        <Button
          text="Contact us"
          type="green"
          onClick={() => console.log("contact us")}
        />
      </div>
    </section>
  );
};

export { Navbar };
