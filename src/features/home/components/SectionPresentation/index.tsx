import React, { FC, useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import { StaticImage } from "gatsby-plugin-image";
import { Presentation } from "./interfaces/Presentation";
import { Section } from "./style";
import { SmoothScrollContext } from "../../../app/context/SmoothScrollContext";
import { splitText, setLag } from "../../../../helpers";
import { reveal } from "./animation";

// import Signature from "../Signature";

interface Props {
	presentation: Presentation;
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

	// useFull to set a class at the end of animation
	const handleOnComplete = () => {
		setIsAnimationDone(true);
	}

	useLayoutEffect(() => {
		// Split paragraph into lines
		const splitIntroPresentation = splitText(refIntroPresentation);
		const splitIntroDetail = splitText(refIntroDetail);

		// Set lag on text
		setLag(splitIntroPresentation, smoothScrollContext)
		setLag(splitIntroDetail, smoothScrollContext)

		// Reveal all elements
		reveal(refTimeline, refSection, selectElement, splitIntroPresentation, splitIntroDetail, handleOnComplete)
	}, [smoothScrollContext])

	return (
		<Section className={`${isAnimationDone ? "section-presentation overflow-visible" : "section-presentation"}`} ref={refSection}>
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
				{/* <Signature /> */}
			</div>
		</Section>
	);
};

export default SectionPresentation;
