import gql from 'graphql-tag';

export const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      Title
      Text
    }
  }
`;