import React, { useEffect, useRef } from "react";
import { Heading, Wrapper, Presentation, Mark, WrapperMarkPresentation } from "./style";
import gsap from "gsap"


const Hero = () => {
	const refTitle = useRef<HTMLHeadingElement>(null)
	const refMark = useRef<HTMLDivElement>(null)
	const refPresentation = useRef<HTMLDivElement>(null)
	let selector = gsap.utils.selector(refTitle);

	useEffect(() => {
		gsap.set(selector(".letters div"), { yPercent: -103 })
		gsap.set(refTitle.current, { autoAlpha: 1 })

		const tl = gsap.timeline({})

		tl.to(selector(".letters div"), { duration: 1, yPercent: 0, stagger: 0.05, ease: "expo.inOut", delay: 10 })
			.to(selector(".letters div:not([data-char='.'])"), { duration: 1, yPercent: 103, stagger: 0.1, ease: "expo.inOut" })
			.from(refMark.current, {
				opacity: 0
			})
			.from(refPresentation.current, {
				opacity: 0
			})
		// .to(selector(".letters div:not([data-char='.'])"), { duration: 1, yPercent: 0, stagger: 0.1, ease: "expo.inOut" })

	})

	return (
		<Wrapper className="hero-wrapper">
			<Heading ref={refTitle}>
				<div className="letters graphic">
					<div data-char=".">G</div>
					<div data-char=".">r</div>
					<div data-char="a">x</div>
					<div data-char="p">P</div>
					<div data-char="h">н</div>
					<div data-char=".">i</div>
					<div data-char=".">c</div>
				</div>
				<div className="highlight">
					<div className="letters">
						<div data-char=".">s</div>
						<div data-char=".">t</div>
						<div data-char=".">u</div>
						<div data-char=".">d</div>
						<div data-char=".">i</div>
						<div data-char="o">O</div>
					</div>
				</div>
			</Heading>
			<WrapperMarkPresentation>
				<div className="relative" style={{ display: "inline-block" }}>
					<Mark ref={refMark} className="mark" />
					<Presentation ref={refPresentation}>
						WEBDESIGN <span className="separator">I</span> PRINT <span className="separator">I</span> BRAND IDENTITY <span className="separator">I</span> ILLUSTRATION <span className="separator">I</span> LAYOUT
					</Presentation>
				</div>
			</WrapperMarkPresentation>
		</Wrapper>
	);
};

export default Hero;
