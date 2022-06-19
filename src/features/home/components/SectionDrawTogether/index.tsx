import React, { useContext, useRef } from "react";
import gsap from 'gsap';

import { Section, Title } from "./style"
import { setLag, splitText } from "../../../../helpers";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";


const SectionDrawTogether = () => {
	const smoothScrollContext = useContext(SmoothScrollContext);
	const refTitle = useRef<HTMLHeadingElement>(null);

	// Split paragraph into lines
	const splitIntroPresentation = splitText(refTitle, "lines");
	// Set lag on text
	setLag(splitIntroPresentation, smoothScrollContext)

	return (
		<Section className="draw-together overflow-visible">
			<Title ref={refTitle} className="title">Should we draw together <span className="highlight">?</span></Title>
			<div className="answers">
				<span data-speed="1.1" data-lag="0.04" className="yes">Yes</span>
				<span data-speed="0.98" data-lag="0.02" className="no">No</span>
			</div>
		</Section>
	)
}

export default SectionDrawTogether