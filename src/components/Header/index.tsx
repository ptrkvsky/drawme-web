import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import BurgerButton from "../BurgerButton";
import { Wrapper } from "./style";
import getRandomInt from "../../helpers/getRandom";
import { appSelector } from "../../features/app/slices/appSlice";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const tl = useRef<gsap.core.Timeline>();
  const refWrapper = useRef<HTMLHeadElement>(null);
  const refLogo = useRef<HTMLParagraphElement>(null);
  const refDraw = useRef<HTMLSpanElement>(null);
  const refSheep = useRef<HTMLSpanElement>(null);

  const getLetter = (positions: number[]) => {
    // choose one random letter to swap
    const position = getRandomInt(0, 4);

    // if the position is already present
    if (positions.includes(position)) {
      getLetter(positions);
    }

    if (position === 0) {
      return {
        position,
        letter: `S`,
      };
    }
    if (position === 1) {
      return {
        position,
        letter: `H`,
      };
    }
    if (position === 2 || position === 3) {
      return {
        position,
        letter: `E`,
      };
    }

    if (position === 4) {
      return {
        position,
        letter: `P`,
      };
    }
  };

  const letter1 = getLetter([]);
  const letter2 = getLetter([letter1?.position]);
  const letter3 = getLetter([letter1?.position, letter2?.position]);
  const letter4 = getLetter([letter1?.position, letter2?.position, letter3?.position]);
  const letter5 = getLetter([
    letter1?.position,
    letter2?.position,
    letter3?.position,
    letter4?.position,
  ]);

  useEffect(() => {
    const splitSheep = new SplitText(refSheep.current, {
      type: `chars`,
    });

    const charsRandom = "!@#$%^&*+:'/|";

    if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5) return;

    tl.current = gsap
      .timeline({
        repeat: -1,
        scrollTrigger: {
          trigger: refWrapper.current,
          start: "top top",
          endTrigger: "footer",
          end: "bottom+=100vh bottom",
          pin: true,
          pinType: "fixed",
          markers: false,
          pinReparent: true,
          pinSpacing: false,
        },
      })
      .to(splitSheep.chars[letter1?.position], {
        duration: getRandomInt(1, 4),
        delay: getRandomInt(0, 3),
        scrambleText: { text: letter1?.letter, chars: charsRandom },
      })
      .to(splitSheep.chars[letter2?.position], {
        duration: getRandomInt(1, 4),
        delay: getRandomInt(0, 3),
        scrambleText: { text: letter2.letter, chars: charsRandom },
      })
      .to(splitSheep.chars[letter3?.position], {
        duration: getRandomInt(1, 4),
        delay: getRandomInt(0, 3),
        scrambleText: { text: letter3.letter, chars: charsRandom },
      })
      .to(splitSheep.chars[letter4?.position], {
        duration: getRandomInt(1, 4),
        delay: getRandomInt(0, 3),
        scrambleText: { text: letter4.letter, chars: charsRandom },
      })
      .to(splitSheep.chars[letter5?.position], {
        duration: getRandomInt(1, 4),
        delay: getRandomInt(0, 3),
        scrambleText: { text: letter5.letter, chars: charsRandom },
      })
      .to(splitSheep.chars[0], { duration: 0.5, scrambleText: "S" })
      .to(splitSheep.chars[1], { duration: 0.5, scrambleText: "H" })
      .to(splitSheep.chars[2], { duration: 0.5, scrambleText: "E" })
      .to(splitSheep.chars[3], { duration: 0.5, scrambleText: "E" })
      .to(splitSheep.chars[4], { duration: 0.5, scrambleText: "P" })
      // // DESIGN
      .to(splitSheep.chars[0], { duration: 0.5, delay: getRandomInt(1, 4), scrambleText: "D" })
      .to(splitSheep.chars[1], { duration: 0.5, scrambleText: "E" })
      .to(splitSheep.chars[2], { duration: 0.5, scrambleText: "S" })
      .to(splitSheep.chars[3], { duration: 0.5, scrambleText: "I" })
      .to(splitSheep.chars[4], { duration: 0.5, scrambleText: "G" })
      // Display the last letter
      .set(".dash", { opacity: 1 })
      .to(splitSheep.chars[5], { duration: 0.5, scrambleText: "N" })
      .set(".dash", { opacity: 0 });
  }, []);

  const appState = useAppSelector(appSelector);

  let headerClass = appState.header.isBlack ? "black" : "";
  headerClass += appState.isPreloadOver ? " visible" : "";

  return (
    <Wrapper ref={refWrapper} className={headerClass}>
      <BurgerButton />
      <p ref={refLogo} className="logo">
        <span ref={refDraw}>DRAW</span> ME A{" "}
        <span ref={refSheep} className="highlight">
          SHEEP<span className="dash">-</span>
        </span>
      </p>
    </Wrapper>
  );
};

export default Header;
