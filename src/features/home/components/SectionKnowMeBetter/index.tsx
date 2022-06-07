import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { Section, Stripes } from './style';
import { SmoothScrollContext } from '../../../app/context/SmoothScrollContext';
import { Linear } from 'gsap/all';

const SectionKnowMeBetter = () => {
	// get smoothscrollcontext
	const smoothScrollContext = useContext(SmoothScrollContext);
	// ref to section	
	const refSection = useRef<HTMLElement>(null);
	const selectElement = gsap.utils.selector(refSection);
	// ref marquee top
	const refMarqueeTop = useRef<HTMLDivElement>(null)

	const el = refMarqueeTop.current

	if (el) {
		// marquee 
		const rate = 200;
		// get the width of the element
		const distance = el.clientWidth;
		// get the margin-right of the element
		const style = window.getComputedStyle(el);
		const marginRight = parseInt(style.marginRight) || 0;
		// get the total width of the element
		const totalDistance = distance + marginRight;
		// get the parent of the element
		const container = el.parentElement;

		gsap.to(container, {
			repeat: -1,
			x: '-' + totalDistance,
			ease: Linear.easeNone,
			duration: totalDistance / rate, // get the duration of the animation 
		});

	}

	return (
		<Section ref={refSection}>
			<Stripes ref={refMarqueeTop} className='stripes top'>
				<p className='stripe item marquee'>Wanna get to know me better <span className='highlight'>?</span></p>
				<p className='stripe item marquee'>Wanna get to know me better <span className='highlight'>?</span></p>
				<p className='stripe item marquee'>Wanna get to know me better <span className='highlight'>?</span></p>
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

