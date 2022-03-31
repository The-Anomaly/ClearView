import { ClearViewWhite } from "assets";
import { Button } from "components/subComponents";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "routes/utils";
import styles from "./styles.module.css";

export interface NavbarProps {
  active: "Home" | "AboutUs" | "ContactUs";
  light?: boolean;
}

const Navbar:React.FC<NavbarProps> = ({active, light}) => {
  return (
    <section className={`${styles.navBG} ${light ? styles.light : ""}`}>
      <div className={`appContainer ${styles.navWrapper} `}>
        <ClearViewWhite className={styles.navLogo} title="clear view" />
        <nav className={styles.navList}>
          <Link to={Routes.home} className={active === "Home" ? styles.active : ""}>Home</Link>
          <Link to={Routes.aboutUs} className={active === "AboutUs" ? styles.active : ""}>About us</Link>
          <Link to={Routes.contactUs} className={active === "ContactUs" ? styles.active : ""}>Contact us</Link>
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
