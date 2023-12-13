import React from "react";
import { Layout } from "../templates/layout";
import { graphql } from "gatsby";

const BlogPage = () => {
  return (
    <Layout title="Blog">
      <></>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query ArticlesData {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
      nodes {
        frontmatter {
          title
          lastUpdate
          date
          slug
          series
          thumbnail
        }
      }
    }
  }
`;
