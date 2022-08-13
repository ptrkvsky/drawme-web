import styled from '@emotion/styled';

interface PropsBackgroundColor {
  color: string;
  height?: number;
}

export const Wrapper = styled.div<PropsBackgroundColor>`
  padding: 3rem 0 3rem 6rem;
  margin-bottom: 3rem;
  font-size: 2.4rem;
  letter-spacing: 1.1px;
  line-height: 1.2;

  background-color: ${(props) => props.color};
  border-bottom-left-radius: 9rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: ${(props) => props.height || 0}px;
    background-color: ${(props) => props.color};
    z-index: -1;
  }

  h2 {
    font-family: ${({ theme }) => theme.typography.fonts.body.medium};
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 3rem;
  }
`;
