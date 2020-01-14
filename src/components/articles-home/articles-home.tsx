import React from 'react';

import { TArticle } from '../../queries/articles';

interface Props {
	articles: TArticle[];
}

export const ArticlesHome: React.FC<Props> = ({ articles }) => {
	return (
		<ul>
			{articles.map(({ id, title }) => (
				<li key={id}>
					<h3>{title}</h3>
				</li>
			))}
		</ul>
	);
};
