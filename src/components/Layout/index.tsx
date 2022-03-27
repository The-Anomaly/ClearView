import * as React from "react";
import { Footer, Navbar, Newsletter } from "./subComponents";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export { Layout };
export * from "./subComponents";
