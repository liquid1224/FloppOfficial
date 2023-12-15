import React from "react";
import { Layout } from "./layout";
import { HeadFC, graphql } from "gatsby";
import * as Vanilla from "./article.css";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
import { Seo } from "./seo";

type ArticlesPageTemplateProps = {
  data: Queries.BlogPostQuery;
};
export const ArticlesPageTemplate = ({ data }: ArticlesPageTemplateProps) => {
  const articles = data.allMarkdownRemark.edges;
  const series = articles[0].node.frontmatter?.series as string;
  const title = articles[0].node.frontmatter?.title as string;
  const thumbnail = getImage(articles[0].node.frontmatter?.thumbnail as ImageDataLike);
  return (
    <Layout>
      <div className={Vanilla.BlogHeader}>
        <GatsbyImage image={thumbnail as IGatsbyImageData} alt={title} className={Vanilla.BlogHeaderImage} />
        <div className={Vanilla.BlogHeaderOverlay}>
          <h2 className={Vanilla.BlogTitle}>{series}</h2>
          <h1 className={Vanilla.BlogTitle}>{title}</h1>
        </div>
      </div>
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

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => <Seo title={data.allMarkdownRemark.edges[0].node.frontmatter?.title as string}></Seo>;

export const query = graphql`
  query BlogPost {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
      edges {
        node {
          html
          frontmatter {
            title
            series
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
