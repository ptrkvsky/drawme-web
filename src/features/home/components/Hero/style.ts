import styled from "@emotion/styled";
import logoText from "../../../../assets/svg/logo_text.svg";

export const Wrapper = styled(`div`)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Heading = styled(`h1`)`
  visibility: hidden;

  position: relative;

  margin-left: -1.1rem;

  font-size: 27.7rem;
  color: #fff;
  z-index: 10;
  mix-blend-mode: difference;

  .letters {
    position: relative;
    font-size: 0;
    overflow: hidden;
    div {
      font-size: 27.7rem;
      display: inline-block;
    }

    &.graphic {
      letter-spacing: 10px;
    }

    .shadow {
      position: absolute;
      top: 0;
      right: 0;
      color: hotpink;
    }
  }

  .highlight {
    display: block;
    font-size: 0;
    position: relative;
    bottom: 5.4rem;
    margin-left: -1.4rem;
    color: transparent;
    -webkit-text-stroke: 2px #fff;

    div {
      font-size: 31.6rem;
    }
  }

  div {
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-char);
      transform: translateY(-103%);
    }
  }
`;

export const Presentation = styled(`div`)`
  gap: 24px;
  display: flex;
  justify-content: center;

  mix-blend-mode: difference;

  span {
    letter-spacing: 5.6px;
    color: #f7f7f7;
    font-size: 1.6rem;
    transform: translate(-30, 0px);
  }

  .separator {
    transform: translate(0%, 100%);
  }
`;

export const Mark = styled(`div`)`
  position: absolute;
  right: -3rem;
  bottom: 18rem;

  display: block;
  width: 21.8rem;
  height: 21.8rem;
  background-image: url(${logoText});
  mix-blend-mode: difference;
`;

export const WrapperMarkPresentation = styled(`div`)`
  position: absolute;
  bottom: 54px;
  width: 100%;
  text-align: center;
`;
