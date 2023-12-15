import React from "react";
import { Layout } from "./layout";
import { graphql } from "gatsby";
import * as Vanilla from "./articles.css";

type ArticlesPageTemplateProps = {
  data: Queries.BlogPostQuery;
};
export const ArticlesPageTemplate = ({ data }: ArticlesPageTemplateProps) => {
  const articles = data.allMarkdownRemark.edges;
  const title = articles[0].node.frontmatter?.title as string;
  return (
    <Layout title={title}>
      <div
        dangerouslySetInnerHTML={{
          __html: articles[0].node.html as TrustedHTML,
        }}
        className={Vanilla.Body}
      ></div>
    </Layout>
  );
};
export default ArticlesPageTemplate;

export const query = graphql`
  query BlogPost {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  }
`;
