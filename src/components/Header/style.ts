import styled from "@emotion/styled";

export const Wrapper = styled(`header`)`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;

  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  height: 58px;
  background: #161618;
  opacity: 1;
  backdrop-filter: blur(20px);

  background: inherit;
  mix-blend-mode: difference;

  .logo {
    margin-left: 16px;
    color: #fff;
    font-size: 1.6rem;
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
