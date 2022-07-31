import React, { useContext, useLayoutEffect, useRef } from "react";
import { Section, Title } from "./style";
import { setLag, splitText } from "../../../../helpers";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";
import { useAppSelector } from "../../../../redux/hooks";
import { appSelector } from "../../../app/slices/appSlice";

const SectionDrawTogether = () => {
  const { isPreloadOver } = useAppSelector(appSelector);
  const smoothScrollContext = useContext(SmoothScrollContext);
  const refTitle = useRef<HTMLHeadingElement>(null);
  // Split paragraph into lines
  // Set lag on text
  useLayoutEffect(() => {
    if (!isPreloadOver) return;
    const splitIntroPresentation = splitText(refTitle, "lines");

    setLag(splitIntroPresentation, smoothScrollContext);
  }, [isPreloadOver]);

  return (
    <Section className="draw-together overflow-visible">
      <Title data-speed="1.05" ref={refTitle} className="title">
        Should we draw together <span className="highlight">?</span>
      </Title>
      <div className="answers">
        <span data-speed="1.1" data-lag="0.04" className="yes">
          Yes
        </span>
        <span data-speed="0.98" data-lag="0.02" className="no">
          No
        </span>
      </div>
    </Section>
  );
};

export default SectionDrawTogether;
