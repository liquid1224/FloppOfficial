//Default Components
import React, { useState } from "react";
import { graphql } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
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
    <div>
      {data.allMarkdownRemark.edges.map((node, index) => {
        const thumbnail = getImage(node.node.frontmatter?.thumbnail as ImageDataLike);
        return <></>;
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
