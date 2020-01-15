import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown';

import { GET_ARTICLE_QUERY, TArticleData } from '../../queries/articles';

const Article: React.FC = () => {
	const router = useRouter();
	console.log(router.query);
	const { query: { slug = '' } = {} } = router || {};
	const { data, loading, error } = useQuery<TArticleData>(GET_ARTICLE_QUERY(typeof slug === 'string' ? slug : slug[0]));
  
	useEffect(() => {
		if (error) {
			router.push('home');
		}
    
	}, [error]);

	const { title, body } = data?.articles[0] || {};

	return (
		<div>
			<h1>{title}</h1>
			<ReactMarkdown source={body} />
		</div>
	);
};

export default Article;
