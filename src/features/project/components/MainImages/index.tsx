import React from "react";
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Wrapper } from "./style";

interface Props {
	images: [
		{
			asset: IGatsbyImageData;
		}
	];
}

const MainImages = ({ images }: Props) => {
	return (
		<Wrapper className="wrapper-images">
			{images.map((image) => {
				const imageGatsby: IGatsbyImageData | undefined = getImage(image.asset);

				return (
					imageGatsby && (
						<GatsbyImage key={JSON.stringify(imageGatsby)} loading="eager" objectFit="cover" image={imageGatsby} alt="image" />
					)
				);
			})}
		</Wrapper>
	);
};

export default MainImages;
