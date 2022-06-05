import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { Section, Stripes } from './style';
import { SmoothScrollContext } from '../../../app/context/SmoothScrollContext';

const SectionKnowMeBetter = () => {
	// get smoothscrollcontext
	const smoothScrollContext = useContext(SmoothScrollContext);
	// ref to section	
	const refSection = useRef<HTMLElement>(null);
	const selectElement = gsap.utils.selector(refSection);


	gsap.to(selectElement(`.top .stripe`), {
		x: 200,
		scrub: true,
		ease: "power4.out",
		scrollTrigger: {
			trigger: selectElement(`.top .stripe`),
			start: `top center`,
			end: `bottom center`,
			markers: true,
			scrub: true,
		}
	})

	return (
		<Section ref={refSection}>
			<Stripes className='stripes top'>
				<p className='stripe item'>Wanna get to know me better <span className='highlight'>?</span></p>
				<p className='stripe item'>Wanna get to know me better <span className='highlight'>?</span></p>
				<p className='stripe item'>Wanna get to know me better <span className='highlight'>?</span></p>
			</Stripes>
			<p>
				Who am i ?
			</p>
			<Stripes className='stripes bottom'>
				<p className='stripe item'>Wanna get to know me better <span className='highlight'>?</span></p>
			</Stripes>
		</Section>
	);
};

export default SectionKnowMeBetter

