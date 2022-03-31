import * as React from "react";
import { ContactForm } from "./ContactForm";
import { ContactInfoSection } from "./ContactInfoSection";
import { HeroSection } from "./HeroSection";

const ContactUI = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ContactInfoSection />
      <ContactForm />
    </React.Fragment>
  );
};

export { ContactUI };
