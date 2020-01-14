import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export interface TArticle {
  id: string;
  title: string;
  body: string;
}

export interface TArticleData {
  articles: TArticle[];
}

export const ARTICLES_QUERY: DocumentNode = gql`
  query Articles {
    articles {
      id
      title
      body
    }
  }
`;