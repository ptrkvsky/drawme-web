import styled from '@emotion/styled';

const Conteneur = styled(`div`)`
  max-width: 163rem;
  margin-left: auto;
  margin-right: auto;
`;

export const BackgroundColor = styled.div``;

export const WrapperCols = styled(Conteneur)`
  display: flex;
  flex-direction: row;
  gap: 12rem;
`;

export const WrapperColLeft = styled(`div`)`
  display: flex;
  flex-direction: column;
`;

export const WrapperColRight = styled.div`
  display: flex;
  flex-direction: column;
`;
