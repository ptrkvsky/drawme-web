import React, { FunctionComponent, useEffect } from "react";
import Header from "../Header";

import StyleContainer from "../../styles/StyleContainer";
import Preloader from "../Preloader";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	// useEffect(() => {
	// 	const body = document.querySelector("body")
	// 	if (body) {
	// 		body.style.opacity = `1`;
	// 	}
	// }, []);


	return (

		<StyleContainer>
			{/* <Header />
				<Preloader /> */}
			<div>{children}</div>
		</StyleContainer>

	);
};


export default Layout