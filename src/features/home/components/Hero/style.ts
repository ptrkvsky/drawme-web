import styled from "@emotion/styled";
import logoText from "../../../../assets/svg/logo_text.svg";

export const Wrapper = styled(`div`)`
  position: relative;
  min-height: calc(100vh - 5.8rem);
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 24px;
  } ;
`;

export const Heading = styled(`h1`)`
  visibility: hidden;

  position: relative;

  margin-left: -1.1rem;

  font-size: 0;

  z-index: 10;
  mix-blend-mode: difference;

  .canva-black & {
    color: #fff;
  }
  .canva-white & {
    color: ${({ theme }) => theme.colors.blackBeauty};
  }

  .letters {
    position: relative;
    font-size: 0;
    overflow: hidden;
    div {
      font-size: clamp(80px, 27.7rem, 27.7rem);
      ${({ theme }) => theme.breakpoints.tabletPortrait} {
        font-size: 35rem;
      }

      display: inline-block;
    }

    &.graphic {
      letter-spacing: clamp(1px, 1rem, 1rem);
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

    .canva-black & {
      -webkit-text-stroke: 2px #fff;
    }
    .canva-white & {
      -webkit-text-stroke: 2px ${({ theme }) => theme.colors.blackBeauty};
    }

    ${({ theme }) => theme.breakpoints.tabletPortrait} {
      .canva-black & {
        -webkit-text-stroke: 1px #fff;
      }
      .canva-white & {
        -webkit-text-stroke: 1px ${({ theme }) => theme.colors.blackBeauty};
      }
    }

    ${({ theme }) => theme.breakpoints.tabletPortrait} {
      bottom: 0;
    }

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
  gap: clamp(7px, 2.4rem, 2.4rem);
  display: flex;
  justify-content: center;

  mix-blend-mode: difference;

  span {
    letter-spacing: clamp(2px, 0.56rem, 0.56rem);
    color: #f7f7f7;
    font-size: clamp(10px, 1.6rem, 1.6rem);
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

  .canva-black & {
    color: #fff;
  }

  .canva-white & {
    color: ${({ theme }) => theme.colors.blackBeauty};
  }
`;

export const WrapperMarkPresentation = styled(`div`)`
  position: absolute;
  bottom: 54px;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    bottom: 16px;
    left: 0;
  } ;
`;
