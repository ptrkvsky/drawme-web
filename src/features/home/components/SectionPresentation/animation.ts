import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { RefObject } from "react";

export const revealParagraph = (refTitle: RefObject<HTMLHeadingElement>, delay = 0): true => {
  const splitTitle = new SplitText(refTitle.current, {
    type: `words,chars,lines`,
  });

  gsap.set(refTitle.current, {
    opacity: 1,
  });

  gsap.from(splitTitle.lines, {
    scrollTrigger: refTitle.current,
    duration: 2,
    y: 200,
    ease: "power4.out",
    delay: 10,
    skewY: 10,
    stagger: {
      amount: 0.4,
    },
    // duration: 0.75,
    // ease: `Power4.linear`,
    // y: `100%`,
    // skewY: 0,
    // scale: 0.95,
    // opacity: 0,
    // stagger: {
    //   amount: 0.5,
    // },
    // delay,
  });

  return true;
};
