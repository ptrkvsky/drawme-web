import React, { FC, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SplitText } from "gsap/dist/SplitText";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { SmoothScrollContext } from "../../features/app/context/SmoothScrollContext";
import { appSelector } from "../../features/app/slices/appSlice";
import { useAppSelector } from "../../redux/hooks";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  MorphSVGPlugin,
  SplitText,
  ScrambleTextPlugin,
  DrawSVGPlugin
);

const GsapScroll: FC = ({ children }) => {
  const [smoothScroll, setSmoothScroll] = useState<globalThis.ScrollSmoother>();
  const refWrapper = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const { isPreloadOver } = useAppSelector(appSelector);

  useLayoutEffect(() => {
    if (!isPreloadOver) return;
    const smooth = ScrollSmoother.create({
      wrapper: refWrapper.current,
      content: refContent.current,
      smooth: 1.5,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
    });
    setSmoothScroll(smooth);
  }, [isPreloadOver]);

  return (
    <SmoothScrollContext.Provider value={smoothScroll}>
      <div id="smooth-wrapper" ref={refWrapper}>
        <div id="smooth-content" ref={refContent}>
          {children}
        </div>
      </div>
    </SmoothScrollContext.Provider>
  );
};

export default GsapScroll;
