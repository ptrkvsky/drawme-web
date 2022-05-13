import { useTheme } from '@emotion/react';
import React, { FC } from 'react';
import { ITheme } from '../../styles/StyleContainer';


const Console: FC = ({ children }) => {
	const theme: ITheme = useTheme()

	const styles = [
		`color: #000`,
		`font-weight: bold`,
		`font-weight: bold`,
		`background: ${theme.colors.iceIceBaby}`,
		`font-size: 45px`,
		`padding: 24px 32px`,
	].join(`;`);
	const message = `DRAW ME A SHEEP`;

	console.info(`%c%s`, styles, message);

	return <>{children}</>
}

export default Console