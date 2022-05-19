import React, { FC } from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Wrapper } from './style'

interface PropsTypography {
	image: IGatsbyImageData
}

const Typography: FC<PropsTypography> = ({ image }: PropsTypography) => {
	const imageGatsby: IGatsbyImageData | undefined = getImage(image);

	return imageGatsby ? (
		<Wrapper>
			<GatsbyImage objectFit="cover" image={imageGatsby} alt="image" />
		</Wrapper>
	) : <></>
}

export default Typography