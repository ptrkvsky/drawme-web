import styled from "@emotion/styled";

export const SVG = styled.svg`
  .st0 {
    .canva-black & {
      fill: ${({ theme }) => theme.colors.whiteBeauty};
    }
    .canva-white & {
      fill: ${({ theme }) => theme.colors.blackBeauty};
    }
  }
  .st1 {
    transform-origin: center center;
    animation: rotating 10s linear infinite;
    .canva-black & {
      fill: ${({ theme }) => theme.colors.whiteBeauty};
    }
    .canva-white & {
      fill: ${({ theme }) => theme.colors.blackBeauty};
    }
  }
  .st2 {
    .canva-black & {
      fill: ${({ theme }) => theme.colors.whiteBeauty};
    }
    .canva-white & {
      fill: ${({ theme }) => theme.colors.blackBeauty};
    }
  }
`;
