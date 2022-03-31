import * as React from "react";
import { Footer, Navbar, NavbarProps, Newsletter } from "./subComponents";

export interface LayoutProps extends NavbarProps {}

const Layout: React.FC<LayoutProps> = ({ children, active, light }) => {
  return (
    <React.Fragment>
      <Navbar active={active} light={light} />
      {children}
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export { Layout };
export * from "./subComponents";
