import React, { useContext, useEffect, useRef } from "react";
import { Heading, Wrapper, Presentation, Mark, WrapperMarkPresentation } from "./style";
import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";

const Hero = () => {
	const refTitle = useRef<HTMLHeadingElement>(null)
	const refMark = useRef<HTMLDivElement>(null)
	const refWrapper = useRef<HTMLDivElement>(null)
	const refPresentation = useRef<HTMLDivElement>(null)
	const smoothScrollContext = useContext(SmoothScrollContext);

	// Selecteur d'élément 
	const selectElementPresentation = gsap.utils.selector(refPresentation);
	let selector = gsap.utils.selector(refTitle);

	useEffect(() => {
		const splitCategorie = new SplitText(selectElementPresentation(".add-lag"), {
			type: `chars`,
		});

		// apply data lag to each category
		if (smoothScrollContext) {
			splitCategorie.chars.forEach((char, i) => {
				smoothScrollContext.effects(char, { speed: 1, lag: (i + 1) * 0.0055 });
			})
		}

		gsap.set(selector(".letters div"), { yPercent: -103 })
		gsap.set(refTitle.current, { autoAlpha: 1 })

		const tl = gsap.timeline({})

		tl.to(selector(".letters div"), { duration: 1, yPercent: 0, stagger: 0.05, ease: "expo.inOut", delay: 10 })
			.to(selector(".letters div:not([data-char='.'])"), { duration: 1, yPercent: 103, stagger: 0.1, ease: "expo.inOut" })
			// .from(refMark.current, {
			// 	opacity: 0,
			// 	duration: 0.5,
			// 	scale: 1.1
			// })
			// animation des categories
			.addLabel("categorie")
			.to(selectElementPresentation(".categorie"), {
				opacity: 1,
				stagger: {
					each: 0.4,
					ease: "expo4.inOut"
				},
			}, "categorie")
			// display separator
			.addLabel("separator")
			.to(selectElementPresentation(".separator"), {
				opacity: 1,
				y: 0,
				duration: 0.4,
				ease: "expo4.inOut",
			})
	}, [smoothScrollContext])

	return (
		<Wrapper className="hero-wrapper">
			<Heading ref={refTitle}>
				<div className="letters graphic">
					<p className="shadow">Graphic</p>
					<div data-lag="0.0055" data-char=".">G</div>
					<div data-lag="0.0165" data-char=".">r</div>
					<div data-lag="0.022" data-char="a">x</div>
					<div data-lag="0.07" data-char="p">p</div>
					<div data-lag="0.08" data-char="h">h</div>
					<div data-lag="0.09" data-char=".">i</div>
					<div data-lag="0.1" data-char=".">c</div>
				</div>
				<div className="highlight">
					<div className="letters">
						<div data-lag="0.04" data-char=".">s</div>
						<div data-lag="0.05" data-char=".">t</div>
						<div data-lag="0.06" data-char=".">u</div>
						<div data-lag="0.07" data-char=".">d</div>
						<div data-lag="0.08" data-char=".">i</div>
						<div data-lag="0.09" data-char="o">o</div>
					</div>
				</div>
			</Heading>
			<WrapperMarkPresentation className="mark__categories">
				<div className="relative" style={{ display: "inline-block" }}>
					{/* <Mark ref={refMark} className="mark" /> */}
					<Presentation className="categories" ref={refPresentation}>
						<span className="categorie opacity-0 webdesign add-lag">WEBDESIGN</span>
						<span className="separator opacity-0 add-lag">I</span>
						<span className="categorie opacity-0 print add-lag">PRINT</span>
						<span className="separator opacity-0 add-lag">I</span>
						<span className="categorie opacity-0 print add-lag">BRAND IDENTITY</span>
						<span className="separator opacity-0 add-lag">I</span>
						<span className="categorie opacity-0 print add-lag">ILLUSTRATION</span>
						<span className="separator opacity-0 add-lag">I</span>
						<span className="categorie opacity-0 print add-lag">LAYOUT</span>
					</Presentation>
				</div>
			</WrapperMarkPresentation>
		</Wrapper>
	);
};

export default Hero;
