import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop, RouteBuilder } from "./utils";

/**
 * MAIN ROUTER COMPONENT
 *
 * ===============================================
 *
 * This component houses all routes and their respective layouts.
 * To add a route navigate to the route builder and add to the existing list.
 *
 *
 */

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {RouteBuilder.map((item, idx) => {
          const { Element, path, caseSensitive, Layout } = item;
          // Checks if a layout exists or not
          const PageComponent =
            Layout ? (
              <Layout>
                <Element />
              </Layout>
            ) : (
              <Element />
            );

          return <Route key={idx} path={path} element={PageComponent} caseSensitive={caseSensitive} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export { MainRouter };
