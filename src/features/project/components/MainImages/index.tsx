import React from "react";
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image";

interface Props {
  images: [
    {
      asset: IGatsbyImageData;
    }
  ];
}

const MainImages = ({ images }: Props) => {
  return (
    <div>
      {images.map((image) => {
        const imageGatsby: IGatsbyImageData | undefined = getImage(image.asset);

        return (
          imageGatsby && (
            <GatsbyImage loading="eager" objectFit="cover" image={imageGatsby} alt="image" />
          )
        );
      })}
    </div>
  );
};

export default MainImages;
