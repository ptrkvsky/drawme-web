import styled from '@emotion/styled';

export const WrapperColors = styled.div`
  display: flex;
  gap: 7rem;
`;

export const WrapperColor = styled.div`
  position: relative;
  display: inline-block;
  .color-name {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    margin-left: 16px;

    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }

  &.color-2 {
    top: 27px;
    .color-name {
      margin-left: -10px;
    }
  }
`;
