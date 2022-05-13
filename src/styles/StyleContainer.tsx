import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';

import { lightTheme, baseTheme } from './theme';
import GlobalStyles from './GlobalStyles';

const theme = {
	...baseTheme,
	...lightTheme,
};

export type ITheme = typeof theme;
/**
 * @desc display theme provider and global style
 * @param children 
 * @returns 
 */
const StyleContainer: FC = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className={`theme-light`}>
				{children}
			</div>
		</ThemeProvider>
	);
};

export default StyleContainer;