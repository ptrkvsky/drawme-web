import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

type TypeSplit = "chars" | "words" | "lines";

// Transform a paragraph into a SplitText object
export const splitText = (
  refParagraph: React.RefObject<HTMLElement>,
  type: TypeSplit = `lines`
): SplitText => {
  refParagraph.current?.classList.add("split-text");

  const splitText = new SplitText(refParagraph.current, {
    type,
  });

  new SplitText(refParagraph.current, {
    type,
  });

  return splitText;
};
