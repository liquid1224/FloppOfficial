import React from "react";
import { Layout } from "./layout";
import { graphql } from "gatsby";

type BlogSeriesProps = {
  data: Queries.ArticleMetaDataQuery;
};
export const BlogSeriesTemplate = ({ data }: BlogSeriesProps) => {
  const articles = data.allMarkdownRemark.nodes;
  const series = articles[0].frontmatter?.series;
  return (
    <Layout>
      <div>{series}</div>
    </Layout>
  );
};
export default BlogSeriesTemplate;

export const query = graphql`
  query BlogSeriesMetaData($id: String!) {
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
