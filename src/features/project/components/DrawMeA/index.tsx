import React, { FC } from 'react'
import BrushDrawMe from '../BrushDrawMe';
import { Title } from './style';
import { useAppSelector } from '../../../../redux/hooks';


interface PropsDrawMeA {
	drawMeA: string;
}

const DrawMeA: FC<PropsDrawMeA> = ({ drawMeA }: PropsDrawMeA) => {
	const projectState = useAppSelector(state => state.project);

	return (
		<Title>
			<span className="brushed">Draw Me
				<BrushDrawMe color={projectState.color} />
				<div className='animate'></div>
			</span>
			<span className="highlight">{drawMeA}</span>
		</Title>
	)
}

export default DrawMeA