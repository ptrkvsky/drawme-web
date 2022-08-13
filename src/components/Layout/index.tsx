import React, { FC, useLayoutEffect } from "react";
import Header from "../Header";
import StyleContainer from "../../styles/StyleContainer";
import Preloader from "../Preloader";
import GsapScroll from "../GsapScroll";
import { homeSelector } from "../../features/home/slices/homeSlice";
import { useAppSelector } from "../../redux/hooks";

export const Layout: FC = ({ children }) => {
  const { isCanvaBlack } = useAppSelector(homeSelector);

  useLayoutEffect(() => {
    if (!document) return;
    const body = document.querySelector("body");

    if (body) {
      body.style.opacity = `1`;
    }
  }, [document]);

  return (
    <StyleContainer>
      <div
        className={`${
          isCanvaBlack ? `children-wrapper canva-black` : `children-wrapper canva-white`
        }`}
      >
        <GsapScroll>
          <Header />
          <Preloader />
          {children}
        </GsapScroll>
      </div>
    </StyleContainer>
  );
};
