import styled from "@emotion/styled";
import { TitleSection } from "../../../../styles/atoms/Titles";

export const Section = styled("section")`
  margin: 12rem 0;

  .title {
    margin-bottom: 6rem;
  }

  .answers {
    margin: 7rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 44.6rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fonts.heading};

    .yes {
      font-size: 7rem;
    }

    .no {
      font-size: 3rem;
    }
  }
`;

export const Title = styled(TitleSection)`
  text-align: center;
  max-width: 47.6rem;
  margin: 0 auto;

  .highlight {
    color: ${({ theme }) => theme.colors.iceIceBaby};
  }
`;
