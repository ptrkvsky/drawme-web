import React, { useEffect, useRef } from "react";
import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import { Presentation } from "./interfaces/Presentation";
import { Section } from "./style";
import Signature from "../Signature";
import { revealParagraph } from "./animation";

interface Props {
	presentation: Presentation;
}

const SectionPresentation = ({ presentation }: Props) => {
	const refIntroPresentation = useRef<HTMLDivElement>(null);
	const refIntroDetail = useRef<HTMLDivElement>(null);
	const refWrapperSVG = useRef<HTMLDivElement>(null);
	const refTl = useRef<gsap.core.Timeline>(gsap.timeline({
		scrollTrigger: {
			trigger: refWrapperSVG.current,
			start: "top center", // when the top of the trigger hits the top of the viewport
		}
	}))

	useEffect(() => {
		const splitIntroPresentation = new SplitText(refIntroPresentation.current, {
			type: `lines`,
		});
		new SplitText(refIntroPresentation.current, {
			type: `lines`,
		});
		// const splitIntroDetail = new SplitText(refIntroDetail.current, {
		// 	type: `lines`,
		// });
		new SplitText(refIntroDetail.current, {
			type: `lines`,
		});

		gsap.from(splitIntroPresentation.lines, {
			scrollTrigger: "#wrapper-svg",
			duration: 0.5,
			delay: 0,
			y: -200,
			ease: "power4.out",
			skewY: -20,
			stagger: {
				amount: 0.5,
			},
		});
	}, [])

	return (
		<Section className="section-presentation">
			<div className="illustration crayon" data-speed="0.85">
				<StaticImage
					src="../../../../assets/images/illustration_crayon.png"
					alt="Illustration crayon"
				/>
			</div>
			<div className="illustration book" data-speed="1.05">
				<StaticImage
					src="../../../../assets/images/illustration_book.png"
					alt="Illustration book"
				/>
			</div>
			<div className="illustration fingers" >
				<div className="relative">
					<div data-speed="0.9">
						<StaticImage
							src="../../../../assets/images/illustration_fingers.png"
							alt="Illustration fingers"
						/>
					</div>
					<div className="illustration letters" data-speed="1.15">
						<StaticImage
							src="../../../../assets/images/illustration_letters.png"
							alt="Illustration letters"
						/>
					</div>
				</div>
			</div>
			<div ref={refIntroPresentation} className="intro-presentation">{presentation.introPresentation}</div>
			<div ref={refIntroDetail} className="intro-detail">{presentation.introDetail}</div>
			<div ref={refWrapperSVG} className="wrapper-svg" id="wrapper-svg">
				<Signature />
			</div>
		</Section>
	);
};

export default SectionPresentation;
