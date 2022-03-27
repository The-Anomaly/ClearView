import * as React from "react";
import { BrandSection } from "./BrandSection";
import { HeroSection } from "./HeroSection";
import styles from "./styles.module.css";

const HomeUI = () => {
  return (
    <>
      <section>
        <HeroSection />
        <BrandSection />
        <p>Home</p>
       
      </section>
    </>
  );
};

export { HomeUI };
