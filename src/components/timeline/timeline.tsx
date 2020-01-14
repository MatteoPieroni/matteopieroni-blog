import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { WORKPLACES_QUERY, WorkplaceData } from '../../queries/workplaces';
import { WorkProjectList } from '../work-project-list';

export const Timeline: React.FC = () => {
	const { data, loading, error } = useQuery<WorkplaceData>(WORKPLACES_QUERY);
	const { workplaces } = data || {};

	if (loading) {
		return <div>Loading</div>;
	}

	if (error) {
		return <p>Error</p>;
	}

	return (
		<>
			{workplaces && (
				<ul>
					{workplaces.map(({ id, company, role, period: { startdate, enddate, place }, description, tech, workplaceprojects }) => (
						<div key={id}>
							<div>
								<h2>{company}</h2>
								<p>{`${startdate} - ${enddate} ${place}`}</p>
								<p>{role}</p>
							</div>
							<div>
								{description}
							</div>
							<div><p>Tech used: {tech}</p></div>
							<WorkProjectList projects={workplaceprojects} />
						</div>
					))}
				</ul>
			)}
		</>
	);
};
