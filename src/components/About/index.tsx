import { BrandSection } from "../subComponents";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { TeamSection } from "./TeamSection";

const AboutUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BrandSection/>
      <TeamSection />
    </React.Fragment>
  );
};

export { AboutUI };
