import React, { useLayoutEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { Wrapper } from './style';
import useWindowSize from '../../../../hooks/useWindowSize';

interface Props {
  text: Record<string, any>;
  color: string;
}

const PresentationClient = ({ text, color }: Props) => {
  // get height of refWrapper to set height of background color :before
  const getHeight = () => {
    if (refWrapper?.current) {
      return refWrapper.current.clientHeight;
    }
  };

  const [heightWrapper, setHeightWrapper] = React.useState(0);
  const refWrapper = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useLayoutEffect(() => {
    setTimeout(() => {
      const height = getHeight();
      height && setHeightWrapper(height);
    }, 50); // let the dom to render
  }, [windowSize]);

  return (
    <Wrapper ref={refWrapper} color={color} height={heightWrapper}>
      {<PortableText value={text} />}
    </Wrapper>
  );
};

export default PresentationClient;
