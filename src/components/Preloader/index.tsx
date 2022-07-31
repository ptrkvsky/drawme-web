import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Panel } from "./style";
import { Expo } from "gsap";
import Logo from "../Logo";
import { useAppSelector } from "../../redux/hooks";

const Preloader = () => {
  const tl = useRef<gsap.core.Timeline>();
  const refPanel = useRef<HTMLDivElement>(null);

  const { isPreloadOver } = useAppSelector((state) => state.app);

  useEffect(() => {
    // If intro is over, we can fade out and hide the background panel
    if (isPreloadOver) {
      tl.current = gsap
        .timeline()
        // Fade out background panel
        .to(refPanel.current, {
          opacity: 0,
          duration: 1,
          ease: Expo.easeInOut,
        })
        // Hide background panel
        .set(refPanel.current, {
          display: "none",
        });
    }
  }, [isPreloadOver]);

  return (
    <>
      <Logo />
      <Panel ref={refPanel} />
    </>
  );
};

export default Preloader;
