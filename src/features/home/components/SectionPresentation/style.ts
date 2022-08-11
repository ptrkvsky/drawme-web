import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  margin: 12.3rem auto;
  padding: 12.3rem 0;
  max-width: 164rem;
  z-index: 10;
  font-size: 2.4rem;
  min-height: 90rem;
  /* overflow: hidden; */

  .illustration {
    position: absolute;

    ${({ theme }) => theme.breakpoints.mobile} {
      display: none;
    }

    &.fingers {
      top: 6.8rem;
      left: 0;
      max-width: 33.9rem;
    }

    &.book {
      top: 0;
      left: 55rem;
      max-width: 18.6rem;
    }

    &.letters {
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      max-width: 20.4rem;
    }

    &.crayon {
      bottom: 0;
      left: 55rem;
      max-width: 25.8rem;
    }

    .wrapper-overflow {
      overflow: hidden;
      .reveal {
        position: absolute;
        top: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        transition: background-color 3s linear;

        .canvas-white & {
          background-color: ${({ theme }) => theme.colors.blackBeauty};
        }

        .canvas-black & {
          background-color: white;
        }
      }
    }
  }

  .intro-presentation {
    margin-left: 69rem;
    margin-top: 12rem;
    font-size: 3rem;
    max-width: 57.1rem;
    line-height: 1.2;
    letter-spacing: 0.2rem;
    font-family: ${({ theme }) => theme.typography.fonts.body.bold};
  }

  .intro-detail {
    position: absolute;
    right: 0;
    margin-top: 7.2rem;
    max-width: 67.6rem;
    line-height: 1.4;
    letter-spacing: 0.2rem;
    font-weight: 800;
    font-size: 2.1rem;
    font-family: ${({ theme }) => theme.typography.fonts.body.thin};
  }

  .wrapper-svg {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-top: 8rem;
    width: 67.6rem;
  }
`;
