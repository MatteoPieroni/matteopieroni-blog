import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export interface TArticle {
  id: string;
  title: string;
  body: string;
  slug: string;
  readingtime: string;
  publisheddate: Date;
}

export interface TArticleData {
  articles: TArticle[];
}

export const ARTICLES_QUERY: DocumentNode = gql`
  query Articles {
    articles {
      id
      title
      slug
      readingtime
      publisheddate
    }
  }
`;

export const GET_ARTICLE_QUERY: (slug: string) => DocumentNode = (slug) => gql`
  query ArticlesSlug {
    articles(where: { slug: "${slug}" }) {
      id
      title
      slug
      body
      readingtime
      publisheddate
    }
  }
`;