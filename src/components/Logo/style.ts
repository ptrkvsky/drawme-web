import styled from "@emotion/styled";

export const WrapperRelative = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 101;
`;

export const WrapperAbsolute = styled.div`
  max-width: clamp(275px, 40vw, 40vw);
  position: absolute;
  left: 50%;
  top: calc(50% - 4rem);
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const SVG = styled.svg`
  .st1 {
    fill: transparent;
  }
`;
