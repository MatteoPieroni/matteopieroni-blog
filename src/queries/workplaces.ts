import gql from 'graphql-tag';

interface Period {
  startdate: Date;
  enddate: Date;
  place: string;
}

export interface WorkplaceProject {
  id: string;
  name: string;
  description: string;
  link: string;
}

interface Website {
  id: string;
  url: string;
  image: {
    url: string;
  };
}

export interface Workplace {
  id: string;
  company: string;
  role: string;
  period: Period;
  description: string;
  tech: string;
  workplaceprojects: WorkplaceProject[] | [];
  website: Website[] | [];
}

export interface WorkplaceData {
  workplaces: Workplace[];
}

export const WORKPLACES_QUERY = gql`
  query GetWorkplaces {
      workplaces {
        id
        company
        role
        period {
          startdate
          enddate
          place
        }
        description
        tech
        workplaceprojects {
          id
          name
          description
          link
        }
        websites {
          id
          url
          image {
            url
          }
        }
      }
    }
`;