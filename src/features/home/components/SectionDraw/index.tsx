import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import useWindowSize from "../../../../hooks/useWindowSize";
import { ITheme } from "../../../../styles/StyleContainer";
import { ButtonSend, Section, Title } from "./style";

const SectionDraw = () => {
  const theme: ITheme = useTheme();
  const windowSize = useWindowSize();
  const refCanvas = useRef<CanvasDraw | null>();

  return (
    <Section className="section-draw">
      <Title>
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
