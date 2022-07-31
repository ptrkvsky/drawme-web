import React, { useContext, useLayoutEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
import CanvasDraw from "react-canvas-draw";
import useWindowSize from "../../../../hooks/useWindowSize";
import { ITheme } from "../../../../styles/StyleContainer";
import { ButtonSend, Section, Title } from "./style";
import { splitText, setLag } from "../../../../helpers";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";
import { useAppSelector } from "../../../../redux/hooks";
import { appSelector } from "../../../app/slices/appSlice";

const SectionDraw = () => {
  const theme: ITheme = useTheme();
  const { isPreloadOver } = useAppSelector(appSelector);
  const smoothScrollContext = useContext(SmoothScrollContext);
  const windowSize = useWindowSize();
  const refCanvas = useRef<CanvasDraw | null>();
  const refTitle = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!isPreloadOver) return;
    // Split title into lines
    const splitTitle = splitText(refTitle);
    // Set lag on title
    setLag(splitTitle, smoothScrollContext);
  }, [isPreloadOver]);

  return (
    <Section className="section-draw overflow-visible">
      <Title ref={refTitle}>
        What would you draw <br /> for me ?
      </Title>
      {/* <button onClick={() => refCanvas.current?.clear()}>Clear</button>
      <button onClick={() => refCanvas.current?.undo()}>Annuler</button> */}
      <CanvasDraw
        ref={(canvasDraw) => (refCanvas.current = canvasDraw)}
        backgroundColor={theme.colors.blackBeauty}
        brushColor={theme.colors.iceIceBaby}
        canvasHeight={800}
        canvasWidth={windowSize.width}
        hideInterface={false}
      />
      <div className="wrapper-button">
        <div className="relative container">
          <ButtonSend className="button-send" type="button">
            Send me your artwork &gt;
          </ButtonSend>
        </div>
      </div>
    </Section>
  );
};

export default SectionDraw;
