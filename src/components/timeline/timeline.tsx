import React from 'react';
import { Workplace } from '../../queries/workplaces';
import { WorkProjectList } from '../work-project-list';

interface Props {
	workplaces: Workplace[];
}

export const Timeline: React.FC<Props> = ({ workplaces }) => {
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
