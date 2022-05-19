import React, { FC } from "react";
import Layout from "../components/Layout";

const LayoutContainer: FC = ({ children }) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
}

export default LayoutContainer;
