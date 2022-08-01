import styled from "@emotion/styled";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  border: none;
  background: transparent;

  ${({ theme }) => theme.breakpoints.mobile} {
    gap: 5px;
  } ;
`;

export const Line = styled.span`
  display: block;
  width: 19px;
  height: 3px;
  background-color: #fff;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 36px;
    height: 6px;
  } ;
`;
