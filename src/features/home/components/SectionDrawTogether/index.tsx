import React from "react";
import gsap from 'gsap';
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Section, Title } from "./style"

gsap.registerPlugin(MorphSVGPlugin);

const SectionDrawTogether = () => {
	return (
		<Section className="draw-together">
			<Title className="title">Should we draw together <span className="highlight">?</span></Title>
			<div className="answers">
				<span className="yes">Yes</span>
				<span className="no">No</span>
			</div>
		</Section>
	)
}

export default SectionDrawTogether