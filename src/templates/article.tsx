import React from "react";
import { Layout } from "./layout";
import { graphql } from "gatsby";

type ArticlesPageTemplateProps = {
  data: Queries.ArticleMetaDataQuery;
};
export const ArticlesPageTemplate = ({ data }: ArticlesPageTemplateProps) => {
  const articles = data.allMarkdownRemark.nodes;
  const title = articles[0].frontmatter?.title;
  return (
    <Layout>
      <div>{title}</div>
    </Layout>
  );
};
export default ArticlesPageTemplate;

export const query = graphql`
  query ArticleMetaData($id: String!) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" }, id: { eq: $id } }) {
      nodes {
        frontmatter {
          slug
          title
          series
        }
        id
      }
    }
  }
`;
