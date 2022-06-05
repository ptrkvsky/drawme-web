import React, { useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { FC, useEffect, useRef } from "react";
import { SmoothScrollContext } from "../../features/app/context/SmoothScrollContext";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GsapScroll: FC = ({ children }) => {
	const [smoothScroll, setSmoothScroll] = useState<globalThis.ScrollSmoother>()
	const refWrapper = useRef<HTMLDivElement>(null)
	const refContent = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const smooth = ScrollSmoother.create({
			wrapper: refWrapper.current,
			content: refContent.current,
			smooth: 1.5,

			normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
			ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
			effects: true,
		});
		setSmoothScroll(smooth)
	}, [])

	return (
		<SmoothScrollContext.Provider value={smoothScroll}>
			<div id="smooth-wrapper" ref={refWrapper}>
				<div id="smooth-content" ref={refContent}>
					{children}
				</div>
			</div>
		</SmoothScrollContext.Provider>
	)
}

export default GsapScroll

