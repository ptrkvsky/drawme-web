import styled from "@emotion/styled";

export const Title = styled(`h1`)`
  font-size: 12rem;

  .brushed {
    position: relative;
    img {
      position: absolute;
      left: 0;
      z-index: -1;
    }
  }

  .highlight {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.text};
  }
`;
