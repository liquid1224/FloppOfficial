//import default components
import React from "react";
import { HeadFC, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//import author components
import { Layout } from "./layout";
import { Seo } from "./seo";
import * as Vanilla from "../styles/article.css";

type ArticlesPageTemplateProps = {
  data: Queries.BlogPostQuery;
};
export const ArticlesPageTemplate = ({ data }: ArticlesPageTemplateProps) => {
  const articles = data.allMarkdownRemark.edges[0];
  const series = articles.node.frontmatter?.series as string;
  const title = articles.node.frontmatter?.title as string;
  const thumbnail = getImage(articles.node.frontmatter?.thumbnail as ImageDataLike);
  return (
    <Layout>
      <div className={Vanilla.BlogHeader}>
        <GatsbyImage image={thumbnail as IGatsbyImageData} alt={title} className={Vanilla.BlogHeaderImage} />
        <div className={Vanilla.BlogHeaderOverlay}>
          <h2 className={Vanilla.BlogTitle}>{series}</h2>
          <h1 className={Vanilla.BlogTitle}>{title}</h1>
        </div>
      </div>
      <article className="">
        <div
          dangerouslySetInnerHTML={{
            __html: articles.node.html as TrustedHTML,
          }}
          className={Vanilla.Body}
        ></div>
      </article>
    </Layout>
  );
};
export default ArticlesPageTemplate;

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => <Seo title={data.allMarkdownRemark.edges[0].node.frontmatter?.title as string}></Seo>;

export const query = graphql`
  query BlogPost($id: String!) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" }, id: { eq: $id } }) {
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
