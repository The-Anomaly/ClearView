import { BrandSection } from "../subComponents";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { TeamSection } from "./TeamSection";
import { StatSection } from "./StatSection";

const AboutUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BrandSection/>
      <TeamSection />
      <StatSection />
    </React.Fragment>
  );
};

export { AboutUI };
