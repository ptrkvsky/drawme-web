import styled from "@emotion/styled";

export const Wrapper = styled(`header`)`
  opacity: 0;
  top: 0;
  z-index: 10;
  width: 100vw !important;

  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  height: 58px;
  background: #161618;
  backdrop-filter: blur(20px);

  background: inherit;
  mix-blend-mode: difference;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 24px !important; // overides gsap config
  }

  &.black {
    backdrop-filter: blur(7px);
    background: #161618 0% 0% no-repeat padding-box;
  }

  &.visible {
    opacity: 1 !important; // overides gsap config
  }

  .logo {
    margin-left: 16px;
    color: #fff;
    font-size: clamp(16px, 1.6rem, 1.6rem);
    letter-spacing: 5.6px;
    text-transform: uppercase;

    .dash {
      opacity: 0;
    }

    .highlight {
      color: ${({ theme }) => theme.colors.iceIceBaby};
    }
  }
`;
