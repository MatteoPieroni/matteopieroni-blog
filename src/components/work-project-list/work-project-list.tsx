import React from 'react';

import { WorkplaceProject } from '../../queries/workplaces';

interface Props {
	projects: WorkplaceProject[];
}

export const WorkProjectList: React.FC<Props> = ({ projects }) => {
	return (
		<ul>
			{projects?.map(({ 
				id: projectId,
				name,
				description: projectDescription,
				link, }) => (
				<li key={projectId}>
					<h3>
						{name}
					</h3>
					<p>{projectDescription}</p>
					{link && <a href={link}>{link}</a>}
				</li>
			))}
		</ul>
	);
};
