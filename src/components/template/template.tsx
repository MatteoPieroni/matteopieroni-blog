import React from 'react';
import { LoadingBar } from '../loading-bar';
import { Nav } from '../nav';

interface Props {
  children: React.ReactNode[] | React.ReactNode[];
}

export const Template: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Nav />
			<LoadingBar />
			{children}
		</>
	);
};
