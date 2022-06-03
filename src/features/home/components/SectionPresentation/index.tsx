import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import { Presentation } from "./interfaces/Presentation";
import { Section } from "./style";
import Signature from "../Signature";

interface Props {
	presentation: Presentation;
}

// Transform a paragraph into a SplitText object
const getLines = (refParagraph: React.RefObject<HTMLDivElement>): SplitText => {
	const splitParagraph = new SplitText(refParagraph.current, {
		type: `lines`,
	});

	new SplitText(refParagraph.current, {
		type: `lines`,
	});

	return splitParagraph
}

const SectionPresentation: FC<Props> = ({ presentation }: Props) => {
	// Timeline
	const refTimeline = useRef<gsap.core.Timeline>();

	// Selecteur d'élément 
	const refSelecteur = useRef<HTMLElement>(null);
	const selectElement = gsap.utils.selector(refSelecteur);
	// References
	const refIntroPresentation = useRef<HTMLDivElement>(null);
	const refIntroDetail = useRef<HTMLDivElement>(null);
	const refWrapperSVG = useRef<HTMLDivElement>(null);


	useEffect(() => {
		setTimeout(() => {
			const splitIntroPresentation = getLines(refIntroPresentation);
			const splitIntroDetail = getLines(refIntroDetail);

			refTimeline.current = gsap.timeline({
				scrollTrigger: refSelecteur.current
			})
				// -------------------- Reveal image book
				.addLabel("revealBook")
				.from(selectElement(".illustration.book"), {
					scale: 1.1,
					duration: 1,
					delay: 2,
					ease: "power4.out",
				}, "revealBook")
				.to(selectElement(".illustration.book .reveal"), {
					duration: 1,
					y: "100%",
					ease: "power4.out",
				}, "revealBook")
				// Display intro
				.from(splitIntroPresentation.lines, {
					duration: 0.75,
					y: 100,
					ease: "power4.out",
					skewY: 10,
					stagger: {
						amount: 0.3,
					},
					opacity: 0,
				})
				// Display detail
				.from(splitIntroDetail.lines, {
					duration: 0.75,
					y: 100,
					ease: "power4.out",
					skewY: 10,
					stagger: {
						amount: 0.3,
					},
					opacity: 0,
				})

				// -------------------- Reveal image crayon
				.addLabel("revealCrayon")
				.from(selectElement(".illustration.crayon"), {
					scale: 1.1,
					duration: 1
				}, "revealCrayon")
				.to(selectElement(".illustration.crayon .reveal"), {
					duration: 1,
					y: "100%",
					ease: "power4.out",
				}, "revealCrayon")
		}, 10)
	}, [])

	return (
		<Section className="section-presentation" ref={refSelecteur}>
			<div className="illustration book" data-speed="1.05" data-lag="0.04">
				<div className="wrapper-overflow">
					<StaticImage
						src="../../../../assets/images/illustration_book.png"
						alt="Illustration book"
					/>
					<div className="reveal"></div>
				</div>
			</div>
			<div className="illustration crayon" data-speed="0.85" data-lag="0.3">
				<div className="wrapper-overflow">
					<StaticImage
						src="../../../../assets/images/illustration_crayon.png"
						alt="Illustration crayon"
					/>
					<div className="reveal"></div>
				</div>
			</div>

			<div className="illustration fingers" >
				<div className="relative">
					<div className="wrapper-overflow" data-speed="0.9">
						<StaticImage
							src="../../../../assets/images/illustration_fingers.png"
							alt="Illustration fingers"
						/>
						<div className="reveal"></div>
					</div>
					<div className="illustration letters" data-speed="1.15" data-lag="0.03">
						<StaticImage
							src="../../../../assets/images/illustration_letters.png"
							alt="Illustration letters"
						/>
						<div className="reveal"></div>
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
