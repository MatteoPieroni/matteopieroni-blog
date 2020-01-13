import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown';

import { ARTICLES_QUERY } from '../queries/articles';

export const Home = () => {
	// Create a query hook
	const { data, loading, error } = useQuery(ARTICLES_QUERY);

	console.log(data);

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
			<ul>
				{data.articles.map(article => {
					return <li key={`job__${article.id}`}>{article.Title}<br/>
						<ReactMarkdown source={article.Text} /></li>;
				})}
			</ul>
		</div>
	);
};

export default Home;