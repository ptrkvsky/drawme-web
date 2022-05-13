import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Wrapper } from './style';
import { Expo } from 'gsap';
import Logo from '../Logo';


const Preloader = () => {
	const refPanel = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.to(refPanel.current, {
			opacity: 0,
			delay: 9,
			duration: 1,
			ease: Expo.easeInOut
		})
		gsap.set(refPanel.current, {
			display: "none",
			delay: 10
		})
	}, [])

	return (
		<>
			<Logo />
			<Wrapper ref={refPanel} />
		</>
	)
}

export default Preloader