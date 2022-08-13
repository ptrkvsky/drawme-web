import React from 'react';
import Color1 from './Color1';
import Color2 from './Color2';
import { WrapperColors } from './style';

interface Props {
  color1: string;
  color2: string;
  color3: string;
}

const Colors = ({ color1, color2, color3 }: Props) => {
  return (
    <WrapperColors className="colors">
      <div>
        <Color1 color={color1} />
      </div>
      <div>
        <Color2 color={color2} />
      </div>
      <div>color 3 {color3}</div>
    </WrapperColors>
  );
};

export default Colors;
