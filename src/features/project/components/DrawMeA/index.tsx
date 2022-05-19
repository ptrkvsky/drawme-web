import React, { FC } from 'react'
import { Title } from './style';
import brush from "../../../../assets/svg/brush_draw_me.svg";

interface PropsDrawMeA {
	drawMeA: string;
}

const DrawMeA: FC<PropsDrawMeA> = ({ drawMeA }: PropsDrawMeA) => {
	return (
		<Title>
			<span className="brushed">Draw Me
				<img src={brush} alt="brush" />
				<div className='animate'></div>
			</span>
			<span className="highlight">{drawMeA}</span>
		</Title>
	)
}

export default DrawMeA