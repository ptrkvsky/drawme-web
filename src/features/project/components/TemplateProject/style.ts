import styled from "@emotion/styled";

export const Wrapper = styled(`div`)`
  padding-top: calc(58px + 3.8rem);
`;

const Conteneur = styled(`div`)`
  max-width: 163rem;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapperSection1 = styled(Conteneur)`
  display: flex;
  flex-direction: row;
  gap: 12rem;
`;

export const WrapperColLeft = styled(`div`)`
  display: flex;
  flex-direction: column;
`;

export const WrapperColRight = styled(`div`)`
  display: flex;
  flex-direction: column;
`;
