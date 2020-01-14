import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import { ARTICLES_QUERY, TArticleData } from '../queries/articles';
import { Timeline } from '../components/timeline';
import { ArticlesHome } from '../components/articles-home/articles-home';

export const Home: NextPage = () => {
	const { data, loading, error } = useQuery<TArticleData>(ARTICLES_QUERY);
	const { articles } = data || {};

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
			<Timeline />
			{articles && <ArticlesHome articles={articles} />}
		</div>
	);
};

export default Home;