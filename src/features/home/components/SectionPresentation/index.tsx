import React, { FC, useContext, useEffect, useRef } from "react";
import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import { Presentation } from "./interfaces/Presentation";
import { Section } from "./style";
import Signature from "../Signature";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";

interface Props {
	presentation: Presentation;
}

const scaleIllustration = {
	scale: 1.1,
	duration: 0.75,
	ease: "power4.out",
}

const reveal = {
	duration: 0.75,
	x: "100%",
	ease: "power4.out",
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
	// Get smoothscroll context
	const smoothScrollContext = useContext(SmoothScrollContext);
	// state to say when animation is done
	const [isAnimationDone, setIsAnimationDone] = React.useState(false);
	// Timeline
	const refTimeline = useRef<gsap.core.Timeline>();
	// Selecteur d'élément 
	const refSection = useRef<HTMLElement>(null);
	const selectElement = gsap.utils.selector(refSection);
	// References
	const refIntroPresentation = useRef<HTMLDivElement>(null);
	const refIntroDetail = useRef<HTMLDivElement>(null);
	const refWrapperSVG = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			const splitIntroPresentation = getLines(refIntroPresentation);
			const splitIntroDetail = getLines(refIntroDetail);

			// Apply data lag to presentation
			if (splitIntroPresentation && smoothScrollContext) {
				splitIntroPresentation.lines.forEach((line: any, i: number) => {
					smoothScrollContext.effects(line, { speed: 1, lag: (i + 1) * 0.05 });
				})
			}

			// Apply data lag to detail
			if (splitIntroDetail && smoothScrollContext) {
				splitIntroDetail.lines.forEach((line: any, i: number) => {
					smoothScrollContext.effects(line, { speed: 1, lag: (i + 1) * 0.05 });
				})
			}

			refTimeline.current = gsap.timeline({
				scrollTrigger: {
					trigger: refSection.current,
					markers: true,
					start: "0 center",
				}
			})
				// -------------------- Reveal image book
				.addLabel("revealBook")
				.from(selectElement(".illustration.book"), scaleIllustration, "revealBook")
				.to(selectElement(".illustration.book .reveal"), reveal, "revealBook")
				// -------------------- Reveal image book
				.addLabel("revealFingers")
				.from(selectElement(".illustration.fingers"), scaleIllustration, "revealFingers-=0.35")
				.to(selectElement(".illustration.fingers .reveal"), reveal, "revealFingers-=0.35")
				// -------------------- Reveal image crayon
				.addLabel("revealCrayon")
				.from(selectElement(".illustration.crayon"), scaleIllustration, "revealCrayon-=0.25")
				.to(selectElement(".illustration.crayon .reveal"), reveal, "revealCrayon-=0.25")
				// Display intro
				.from(splitIntroPresentation.lines, {
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
					y: 100,
					ease: "power4.out",
					skewY: 10,
					stagger: {
						amount: 0.3,
					},
					opacity: 0,
					delay: -0.3,
				})
				// remove overflow hidden from lines
				.from(splitIntroPresentation.lines, {
					overflow: "visible",
					onComplete: () => {
						setIsAnimationDone(true);
					}
				})
		}, 10)
	}, [smoothScrollContext])

	return (
		<Section className={`${isAnimationDone ? "section-presentation animation-done" : "section-presentation"}`} ref={refSection}>
			<div className="illustration book" data-speed="1.05" data-lag="0.04">
				<div className="wrapper-overflow">
					<StaticImage
						src="../../../../assets/images/illustration_book.png"
						alt="Illustration book"
					/>
					<div className="reveal"></div>
				</div>
			</div>
			<div className="illustration crayon" data-speed="0.98" data-lag="0.3">
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
					<div className="illustration letters">
						<div className="wrapper-overflow" data-speed="1.15" data-lag="0.03">
							<StaticImage
								src="../../../../assets/images/illustration_letters.png"
								alt="Illustration letters"
							/>
							<div className="reveal"></div>
						</div>
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
