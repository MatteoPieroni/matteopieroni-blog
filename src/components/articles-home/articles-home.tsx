import React from 'react';
import Link from 'next/link';

import { TArticle } from '../../queries/articles';

interface Props {
	articles: TArticle[];
}

export const ArticlesHome: React.FC<Props> = ({ articles }) => {
	return (
		<ul>
			{articles.map(({ id, title, slug }) => (
				<li key={id}>
					<Link href={`/blog/${slug}`} >
						<a>
							<h3>{title}</h3>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
