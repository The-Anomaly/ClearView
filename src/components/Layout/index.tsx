import * as React from "react";
import { Navbar } from "./subComponents";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export { Layout };
export * from "./subComponents";
