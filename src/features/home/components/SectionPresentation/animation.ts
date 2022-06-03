import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { RefObject } from "react";

export const revealPresentation: gsap.Callback = (
  refParagraph,
  delay = 0,
  isDebug = false
): void => {
  const splitParagraph = new SplitText(refParagraph.current, {
    type: `lines`,
  });

  new SplitText(refParagraph.current, {
    type: `lines`,
  });

  gsap.from(splitParagraph.lines, {
    duration: 0.75,
    y: 100,
    ease: "power4.out",
    skewY: 10,
    stagger: {
      amount: 0.3,
    },
    opacity: 0,
    delay,
  });
};

export const revealDetail = (
  refParagraph: RefObject<HTMLHeadingElement>,
  delay = 0,
  isDebug = false
): true => {
  const splitParagraph = new SplitText(refParagraph.current, {
    type: `lines`,
  });

  new SplitText(refParagraph.current, {
    type: `lines`,
  });

  const debugParam = isDebug
    ? {
        start: "center center",
        markers: true,
      }
    : {};

  gsap.from(splitParagraph.lines, {
    scrollTrigger: {
      trigger: refParagraph.current,
      ...debugParam,
    },
    duration: 1.5,
    y: 100,
    ease: "power4.out",
    skewY: 0,
    stagger: {
      amount: 1,
    },
    opacity: 0,
    delay,
  });

  return true;
};
