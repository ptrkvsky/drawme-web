import styled from "@emotion/styled";

export const WrapperFooter = styled(`footer`)`
  display: flex;
  justify-content: space-between;
  max-width: 147.3rem;
  margin: 0 auto;
  padding: 4.2rem 0;
`;

export const Infos = styled(`div`)`
  .mail {
    display: block;
    font-size: clamp(24px, 2.4rem, 2.4rem);
    font-family: ${({ theme }) => theme.typography.fonts.body.bold};
  }
  .baseline {
    font-size: clamp(24px, 2.4rem, 2.4rem);
    font-style: italic;
    margin-bottom: 4px;
  }
  .developer {
    font-size: clamp(16px, 1.6rem, 1.6rem);
    .highlight {
      font-family: ${({ theme }) => theme.typography.fonts.body.bold};
    }
  }
`;

export const Socials = styled(`div`)`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  .social {
    max-width: 4.2rem;
  }
  .detail {
    font-size: 1.3rem;
    line-height: 1.2;
  }
  .highlight {
    font-weight: bold;
  }
`;

export const Goodbye = styled(`div`)`
  .title {
    font-size: clamp(37px, 3.7rem, 3.7rem);
  }
`;
