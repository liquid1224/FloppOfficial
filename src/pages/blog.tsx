//Default Components
import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//Author Components
import { Layout } from "../templates/layout";
import { PageSelector } from "../components/button";
import * as Vanilla from "./blog.css";

type ArticlesListProps = {
  data: Queries.ArticlesDataQuery;
};
const ArticlesList = ({ data }: ArticlesListProps) => {
  const [numPage, setNumPage] = useState(1);
  return (
    <div className={Vanilla.ArticlesWrapper}>
      {data.allMarkdownRemark.edges.map((node, index) => {
        const thumbnail = getImage(node.node.frontmatter?.thumbnail as ImageDataLike);
        const postDate = node.node.frontmatter?.date;
        const updateDate = node.node.frontmatter?.lastUpdate;
        return (
          <Link to={`/blog/${node.node.frontmatter?.slug}`} className={Vanilla.Link}>
            <GatsbyImage image={thumbnail as IGatsbyImageData} alt={node.node.frontmatter?.title as string} className={Vanilla.Thumbnail} />
            <div className={Vanilla.TextWrapper}>
              {node.node.frontmatter?.title}
              <br />
              {`${postDate} ${postDate !== updateDate ? `最終更新：${updateDate}` : ""}`}
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
