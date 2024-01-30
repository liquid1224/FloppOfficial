import React from "react";
import Layout from "../templates/layout";
import { Link, graphql } from "gatsby";
import { useIsDarkModeContext } from "../styles/context";
import * as Vanilla from "../styles/blog.css";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";

type BlogMdxProps = {
  data: Queries.ArticlesMdxQuery;
};
const BlogMdx = ({ data }: BlogMdxProps) => {
  //darkmode context
  const isDarkMode = useIsDarkModeContext();
  return (
    <Layout>
      <div className={Vanilla.BlogWrapper}>
        <div className={Vanilla.ArticlesWrapper}>
          {data.allMdx.edges.map((node, index) => {
            const thumbnail = getImage(node.node.frontmatter?.thumbnail as ImageDataLike);
            const title = node.node.frontmatter?.title as string;
            const postDate = node.node.frontmatter?.date;
            const updateDate = node.node.frontmatter?.lastUpdate;
            const series = node.node.frontmatter?.series;

            return (
              <Link to={`/blogMdx/${node.node.frontmatter?.slug}`} className={`${Vanilla.Link} ${isDarkMode ? Vanilla.LinkDark : ""}`}>
                <GatsbyImage image={thumbnail as IGatsbyImageData} alt={node.node.frontmatter?.title as string} className={Vanilla.Thumbnail} />
                <div className={Vanilla.TextWrapper}>
                  <p className={Vanilla.Series}>{series !== undefined || "" ? `${series}` : ""}</p>
                  <div className={Vanilla.ArticleTitleWrapper}>
                    <h2 className={Vanilla.h2}>{title}</h2>
                  </div>
                  <p className={Vanilla.Date}>{`${postDate}${postDate !== updateDate ? ` | Update:${updateDate}` : ""}`}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default BlogMdx;

export const query = graphql`
  query ArticlesMdx {
    allMdx(filter: { internal: { contentFilePath: { regex: "/articlesMdx/" } } }) {
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
              }
            }
          }
        }
      }
    }
  }
`;
