import styled from "@emotion/styled";

export const Title = styled(`h1`)`
  font-size: 12rem;

  .brushed {
    position: relative;
  }

  .highlight {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
  }
`;
