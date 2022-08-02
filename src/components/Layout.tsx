import React, { FC, useEffect } from "react";
import Header from "./Header";
import StyleContainer from "../styles/StyleContainer";
import Preloader from "./Preloader";
import GsapScroll from "./GsapScroll";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.opacity = `1`;
    }
  }, []);

  return (
    <StyleContainer>
      <GsapScroll>
        <Header />
        <Preloader />
        <div className="children-wrapper">{children}</div>
      </GsapScroll>
    </StyleContainer>
  );
};

export default Layout;
