import * as React from "react";
import { BrandSection } from "./BrandSection";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import styles from "./styles.module.css";
import { Testimonials } from "./Testimonials";
import { ValuesSection } from "./ValuesSection";

const HomeUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BrandSection />
      <ValuesSection />
      <ServicesSection />
      <Testimonials />
    </React.Fragment>
  );
};

export { HomeUI };
