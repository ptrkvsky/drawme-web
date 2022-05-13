import styled from "@emotion/styled";
import { TitleSection } from "../../../../styles/atoms/Titles";

export const Section = styled("section")`
  position: relative;
  z-index: 30;
  font-size: 2.4rem;
  background-color: aliceblue;
  cursor: none;
  min-height: 630px;

  .wrapper-button {
    position: absolute;
    bottom: 3.3rem;
    left: 0;
    right: 0;

    .container {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const ButtonSend = styled("button")`
  background-color: transparent;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fonts.body.medium};
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  border: none;
`;

export const Title = styled(TitleSection)`
  position: absolute;
  top: 6.7rem;
  width: 100%;
  text-align: center;
  color: #fff;
`;
