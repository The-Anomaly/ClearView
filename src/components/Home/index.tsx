import * as React from "react";
import { BrandSection } from "./BrandSection";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { Testimonials } from "./Testimonials";
import { ValuesSection } from "./ValuesSection";
import { VideoSection } from "./VideoSection";

const HomeUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BrandSection />
      <VideoSection />
      <ValuesSection />
      <ServicesSection />
      <Testimonials />
    </React.Fragment>
  );
};

export { HomeUI };
