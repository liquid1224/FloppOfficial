import { graphql } from "gatsby";
import React from "react";
import Layout from "./layout";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
import * as Vanilla from "../styles/article.css";

type ArticlesPageTemplateMdxProps = {
  data: Queries.BlogPostMdxQuery;
  children: any;
};
const ArticlesPageTemplateMdx = ({ data, children }: ArticlesPageTemplateMdxProps) => {
  const article = data.allMdx.edges[0];
  const series = article.node.frontmatter?.series as string;
  const title = article.node.frontmatter?.title as string;
  const thumbnail = getImage(article.node.frontmatter?.thumbnail as ImageDataLike);

  return (
    <Layout>
      <div className={Vanilla.BlogHeader}>
        <GatsbyImage image={thumbnail as IGatsbyImageData} alt={title} />
        <div className={Vanilla.BlogHeaderOverlay}>
          <h2 className={Vanilla.BlogTitle}>{series}</h2>
          <h1 className={Vanilla.BlogTitle}>{title}</h1>
        </div>
      </div>
      <article>
        <div>{children}</div>
      </article>
    </Layout>
  );
};
export default ArticlesPageTemplateMdx;

export const query = graphql`
  query BlogPostMdx($id: String!) {
    allMdx(filter: { internal: { contentFilePath: { regex: "/articlesMdx/" } }, id: { eq: $id } }) {
      edges {
        node {
          frontmatter {
            date
            description
            lastUpdate
            series
            slug
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
                fixed {
                  src
                }
              }
            }
          }
          body
        }
      }
    }
  }
`;
