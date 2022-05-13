import gsap from "gsap"
import React from "react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { FC, useEffect, useRef } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setSmoothScroll } from "../../features/app/slices/appSlice";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const GsapScroll: FC = ({ children }) => {
	const dispatch = useAppDispatch()
	const refWrapper = useRef<HTMLDivElement>(null)
	const refContent = useRef<HTMLDivElement>(null)
	// const refScroll = useRef<globalThis.ScrollSmoother>(null)
	useEffect(() => {
		const smooth = ScrollSmoother.create({
			wrapper: refWrapper.current,
			content: refContent.current,
			smooth: 1.5,

			normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
			ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
			effects: true,
		});

		dispatch(setSmoothScroll(smooth))
	}, [])

	return (
		<div ref={refWrapper}>
			<div ref={refContent}>
				{children}
			</div>
		</div>
	)
}

export default GsapScroll

