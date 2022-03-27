import * as React from "react";
import { BrandSection } from "./BrandSection";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import styles from "./styles.module.css";
import { ValuesSection } from "./ValuesSection";

const HomeUI = () => {
  return (
    <>
      <section>
        <HeroSection />
        <BrandSection />
        <ValuesSection />
        <ServicesSection />
        <p>Home</p>
       
      </section>
    </>
  );
};

export { HomeUI };
