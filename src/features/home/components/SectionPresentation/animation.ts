import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import _SplitText from "gsap/SplitText";
import React from "react";

const scaleIllustration = {
  scale: 1.1,
  duration: 0.75,
  ease: "power4.out",
};

const revealParam = {
  duration: 0.75,
  x: "100%",
  ease: "power4.out",
};

export const reveal = (
  refTimeline: React.MutableRefObject<gsap.core.Timeline | undefined>,
  refSection: React.RefObject<HTMLElement>,
  selectElement: gsap.utils.SelectorFunc,
  splitIntroPresentation: _SplitText,
  splitIntroDetail: _SplitText,
  handleOnComplete: () => void
) => {
  setTimeout(() => {
    refTimeline.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: refSection.current,
          markers: false,
          start: "0 center",
        },
      })
      // -------------------- Reveal image book
      .addLabel("revealBook")
      .from(selectElement(".illustration.book"), scaleIllustration, "revealBook")
      .to(selectElement(".illustration.book .reveal"), revealParam, "revealBook")
      // -------------------- Reveal image book
      .addLabel("revealFingers")
      .from(selectElement(".illustration.fingers"), scaleIllustration, "revealFingers-=0.35")
      .to(selectElement(".illustration.fingers .reveal"), revealParam, "revealFingers-=0.35")
      // -------------------- Reveal image crayon
      .addLabel("revealCrayon")
      .from(selectElement(".illustration.crayon"), scaleIllustration, "revealCrayon-=0.25")
      .to(selectElement(".illustration.crayon .reveal"), revealParam, "revealCrayon-=0.25")
      // -------------------- Display Intro
      .from(splitIntroPresentation.lines, {
        y: 100,
        ease: "power4.out",
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        opacity: 0,
      })
      // -------------------- Display Detail
      .from(splitIntroDetail.lines, {
        y: 100,
        ease: "power4.out",
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        opacity: 0,
        delay: -0.3,
      })
      // -------------------- Animation is complete
      .from(splitIntroPresentation.lines, {
        onComplete: handleOnComplete,
      });
  }, 10);
};
