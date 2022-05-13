import React, { FunctionComponent, useEffect } from "react";
import Header from "./Header";

import "../styles/layout.css";
import StyleContainer from "../styles/StyleContainer";
import Preloader from "./Preloader";
import GsapScroll from "./GsapScroll";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	useEffect(() => {
		const body = document.querySelector("body")
		if (body) {
			body.style.opacity = `1`;
		}
	}, []);


	return (
		<StyleContainer>
			<GsapScroll>
				<Header />
				<Preloader />
				<div>{children}</div>
			</GsapScroll>
		</StyleContainer>
	);
};


export default Layout