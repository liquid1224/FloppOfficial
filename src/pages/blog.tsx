//Default Components
import React, { useState } from "react";
import { HeadFC, Link, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//Author Components
import { Layout } from "../templates/layout";
import * as Vanilla from "../styles/blog.css";
import { useIsDarkModeContext } from "../styles/context";
import { Seo } from "../templates/seo";

type ArticlesListProps = {
  data: Queries.ArticlesDataQuery;
};
const ArticlesList = ({ data }: ArticlesListProps) => {
  const isDarkMode = useIsDarkModeContext();
  return (
    <div className={Vanilla.ArticlesWrapper}>
      {data.allMarkdownRemark.edges.map((node, index) => {
        const thumbnail = getImage(node.node.frontmatter?.thumbnail as ImageDataLike);
        const postDate = node.node.frontmatter?.date;
        const updateDate = node.node.frontmatter?.lastUpdate;
        const series = node.node.frontmatter?.series;
        return (
          <Link to={`/blog/${node.node.frontmatter?.slug}`} className={`${Vanilla.Link} ${isDarkMode ? Vanilla.LinkDark : ""}`}>
            <GatsbyImage image={thumbnail as IGatsbyImageData} alt={node.node.frontmatter?.title as string} className={Vanilla.Thumbnail} />
            <div className={Vanilla.TextWrapper}>
              <p className={Vanilla.Series}>{series !== undefined || "" ? `${series}` : ""}</p>
              <h2 className={Vanilla.h2}>{node.node.frontmatter?.title}</h2>
              <p className={Vanilla.Date}>{`${postDate}${postDate !== updateDate ? ` | Update:${updateDate}` : ""}`}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

type BlogPageProps = {
  data: Queries.ArticlesDataQuery;
};
const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout title="Blog">
      <div className={Vanilla.BlogWrapper}>
        <ArticlesList data={data} />
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query ArticlesData {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }, sort: { frontmatter: { date: DESC } }, limit: 12) {
      edges {
        node {
          frontmatter {
            slug
            title
            series
            lastUpdate
            date
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

export const Head: HeadFC = () => <Seo title="BLOG" path="/blog" description="サークル華力発電所公式ブログです。新着情報や、主宰@liquid1224の日々のつぶやきなどを掲載しています。" />;
