import React, { FunctionComponent } from "react";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";



const LayoutContainer: FunctionComponent = ({ children }) => {
	return (
		<Provider store={store}>
			<Layout>
				{children}
			</Layout>
		</Provider>
	);
}

export default LayoutContainer;
