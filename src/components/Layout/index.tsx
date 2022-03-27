import * as React from "react";
import { Navbar, Newsletter } from "./subComponents";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Newsletter />
    </React.Fragment>
  );
};

export { Layout };
export * from "./subComponents";
