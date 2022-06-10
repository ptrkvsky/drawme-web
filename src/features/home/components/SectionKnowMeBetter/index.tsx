import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Section, Stripes } from './style';
import { SmoothScrollContext } from '../../../app/context/SmoothScrollContext';
import { Linear } from 'gsap/all';
import { horizontalLoop } from "../../../../helpers/horizontalLoop";

const SectionKnowMeBetter = () => {
	// get smoothscrollcontext
	const smoothScrollContext = useContext(SmoothScrollContext);
	// ref to section	
	const refSection = useRef<HTMLElement>(null);
	const selectElement = gsap.utils.selector(refSection);
	// ref marquee top
	const refMarqueeTop = useRef<HTMLDivElement>(null)

	const el = refMarqueeTop.current

	useEffect(() => {
		gsap.utils.toArray(".stripes").forEach((line: any, i) => {
			const links = line.querySelectorAll(".stripe"),
				tl = horizontalLoop(links, {
					repeat: -1,
					speed: 1 + i * 0.5,
					reversed: i ? true : false,
					paddingRight: parseFloat(`${gsap.getProperty(links[0], "marginRight", "px")}`) // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
				});
			links.forEach((link: any) => {
				link.addEventListener("mouseenter", () => gsap.to(tl, { timeScale: 0, overwrite: true }));
				link.addEventListener("mouseleave", () => gsap.to(tl, { timeScale: i ? -1 : 1, overwrite: true }));
			});
		});

	}, [])

	return (
		<Section ref={refSection}>
			<Stripes ref={refMarqueeTop} className='stripes top'>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
			</Stripes>
			<p className="who-am-i">
				Who am i ?
			</p>
			<Stripes className='stripes bottom'>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
				<span className="stripe">Wanna get to know me better <span className="highlight">?</span></span>
			</Stripes>
		</Section>
	);
};

export default SectionKnowMeBetter

