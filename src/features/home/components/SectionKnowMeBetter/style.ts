import styled from "@emotion/styled";

export const Section = styled(`section`)`
  display: block;
  padding: 10.1rem 0;
  background-color: ${({ theme }) => theme.colors.blackBeauty};
`;

export const Stripes = styled(`div`)`
  font-size: 5rem;
  display: flex;
  gap: 8rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fonts.heading};

  .stripe {
    position: absolute;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.iceIceBaby};
  }
`;
