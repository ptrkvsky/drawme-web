import styled from "@emotion/styled";

export const Section = styled(`section`)`
  display: block;
  padding: 10.1rem 0;
  background-color: ${({ theme }) => theme.colors.blackBeauty};
  overflow: hidden;
  white-space: nowrap;

  .who-am-i {
    padding: 6.3rem 0;
    font-size: 2.2rem;
    letter-spacing: 0.44rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
  }
`;

export const Stripes = styled(`div`)`
  font-size: 5rem;
  display: flex;
  gap: 8rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fonts.heading};

  .stripe {
    position: relative;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    gap: 28px;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.iceIceBaby};
  }
`;
