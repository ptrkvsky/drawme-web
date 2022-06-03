import React, { useEffect, useRef } from "react";
import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import { Presentation } from "./interfaces/Presentation";
import { Section } from "./style";
import Signature from "../Signature";

interface Props {
	presentation: Presentation;
}

const SectionPresentation = ({ presentation }: Props) => {
	// Timeline
	const refTimeline = useRef<gsap.core.Timeline>();

	// Selecteur d'élément 
	const refSelecteur = useRef();
	const selectElement = gsap.utils.selector(refSelecteur);
	// References
	const refIntroPresentation = useRef<HTMLDivElement>(null);
	const refIntroDetail = useRef<HTMLDivElement>(null);
	const refWrapperSVG = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			const splitParagraph = new SplitText(refIntroPresentation.current, {
				type: `lines`,
			});

			new SplitText(refIntroPresentation.current, {
				type: `lines`,
			});

			refTimeline.current = gsap.timeline({
				scrollTrigger: refIntroPresentation.current
			})
				.from(splitParagraph.lines, {
					duration: 0.75,
					y: 100,
					ease: "power4.out",
					skewY: 10,
					stagger: {
						amount: 0.3,
					},
					opacity: 0,
				});
		}, 10)
	}, [])

	return (
		<Section className="section-presentation">
			<div className="illustration crayon" data-speed="0.85">
				<div className="wrapper-overflow">
					<StaticImage
						src="../../../../assets/images/illustration_crayon.png"
						alt="Illustration crayon"
					/>
					<div className="reveal"></div>
				</div>
			</div>
			<div className="illustration book" data-speed="1.05">
				<div className="wrapper-overflow">
					<StaticImage
						src="../../../../assets/images/illustration_book.png"
						alt="Illustration book"
					/>
				</div>
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
