import * as React from "react";
import { ContactInfoSection } from "./ContactInfoSection";
import { HeroSection } from "./HeroSection";

const ContactUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ContactInfoSection />
    </React.Fragment>
  );
};

export { ContactUI };
