import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import { Timeline } from '../components/timeline';
import { WORKPLACES_QUERY, WorkplaceData } from '../queries/workplaces';

export const WorkExperience: NextPage = () => {
	const { data, loading, error } = useQuery<WorkplaceData>(WORKPLACES_QUERY);
	const { workplaces } = data || {};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {JSON.stringify(error)}</p>;
	}

	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{workplaces && <Timeline workplaces={workplaces} />}
		</div>
	);
};

export default WorkExperience;