import React from "react";

interface Props {
  color1: string;
  color2: string;
  color3: string;
}

const Colors = ({ color1, color2, color3 }: Props) => {
  return (
    <div>
      color 1 : {color1} color 2 : {color2}, color 3 {color3}
    </div>
  );
};

export default Colors;
