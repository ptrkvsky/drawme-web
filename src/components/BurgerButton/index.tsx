import React from "react";
import { Line, Wrapper } from "./style";

const BurgerButton = () => {
  return (
    <Wrapper className="burger-button" aria-label="button-menu">
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
};

export default BurgerButton;
