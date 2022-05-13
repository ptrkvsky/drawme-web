import styled from "@emotion/styled";
import { TitleSection } from "../../../../styles/atoms/Titles";

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 0 12.3rem 0 0;
  max-width: 164rem;
  z-index: 10;
  font-size: 2.4rem;
  min-height: 100vh;

  .sub-title {
    font-size: 4.5rem;
  }

  .wrapper-description-title {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    max-width: 55.8rem;
    top: 44.4rem;

    .description {
      font-size: 1.6rem;
      line-height: 2.3rem;
      letter-spacing: 0.128rem;
      text-align: center;
      margin-top: 4.4rem;
      padding: 0 2rem;
    }
  }

  .wrapper-illustration-title {
    position: absolute;
    &.website {
      top: 11.6rem;
      left: 0;

      padding-left: 4rem;
      .illustration {
        max-width: 35.9rem;
      }
      .sub-title {
        position: absolute;
        top: 16.4rem;
        left: -12.2rem;
        color: ${({ theme }) => theme.colors.text};
        transform: rotate(-90deg);
      }
    }

    &.layout {
      top: 0;
      left: 55rem;
      .illustration {
        max-width: 20rem;
      }
    }

    &.packaging {
      top: 4.8rem;
      left: 110.8rem;
      .illustration {
        max-width: 34.5rem;
      }
      .sub-title {
        padding-left: 3.6rem;
        margin-bottom: 1.1rem;
      }
    }

    &.social {
      top: 40.1rem;
      left: 132.5rem;
      .illustration {
        max-width: 31rem;
      }
      .sub-title {
        position: absolute;
        top: 20.9rem;
        left: -19.1rem;
        z-index: 10;

        transform: rotate(-270deg);

        -webkit-text-stroke: 1px black;
        color: transparent;
      }
    }

    &.logo {
      top: 86.7rem;
      left: 69rem;
      .illustration {
        max-width: 18.1rem;
      }
      .sub-title {
        margin-top: 1.4rem;
      }
    }

    &.identity {
      top: 57.6rem;
      left: 22.2rem;
      .illustration {
        max-width: 25.9rem;
      }
      .sub-title {
        position: absolute;
        top: 16.4rem;
        left: -9.8rem;
        z-index: 10;

        transform: rotate(270deg);

        -webkit-text-stroke: 1px black;
        color: transparent;
      }
    }
  }
`;

export const Title = styled(TitleSection)`
  text-align: center;
`;
