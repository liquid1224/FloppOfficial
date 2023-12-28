//Default Components
import React, { useEffect, useRef, useState } from "react";
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
  //darkmode context
  const isDarkMode = useIsDarkModeContext();
  return (
    <div className={Vanilla.ArticlesWrapper}>
      {data.allMarkdownRemark.edges.map((node, index) => {
        const thumbnail = getImage(node.node.frontmatter?.thumbnail as ImageDataLike);
        const title = node.node.frontmatter?.title as string;
        const postDate = node.node.frontmatter?.date;
        const updateDate = node.node.frontmatter?.lastUpdate;
        const series = node.node.frontmatter?.series;
        //2lines title overflow
        const [truncatedTitle, setTruncatedTitle] = useState(title);
        const [maxLength, setMaxLength] = useState(0);
        useEffect(() => {
          const ArticleTitleWrapperWidth = document.getElementById("ArticleTitleWrapper")?.offsetWidth as number;
          const japaneseTextLength = title.replace(/[\u0021-\u007E]/g, "").length;
          const trueTextLength = (title.length - japaneseTextLength) * 0.6 + japaneseTextLength;

          const ArticleTitle = document.getElementById("ArticleTitle") as HTMLElement;
          const ArticleTitleFontSize = parseFloat(window.getComputedStyle(ArticleTitle).fontSize.replace("px", ""));

          const calculatedMaxLength = Math.floor((ArticleTitleWrapperWidth * 2.0) / ArticleTitleFontSize);
          console.log(trueTextLength);

          if (ArticleTitleWrapperWidth && ArticleTitleFontSize) {
            setMaxLength(calculatedMaxLength);
            if (trueTextLength > calculatedMaxLength) setTruncatedTitle(title.substring(0, calculatedMaxLength - 1) + "...");
          }
        }, []);

        return (
          <Link to={`/blog/${node.node.frontmatter?.slug}`} className={`${Vanilla.Link} ${isDarkMode ? Vanilla.LinkDark : ""}`}>
            <GatsbyImage image={thumbnail as IGatsbyImageData} alt={node.node.frontmatter?.title as string} className={Vanilla.Thumbnail} />
            <div className={Vanilla.TextWrapper}>
              <p className={Vanilla.Series}>{series !== undefined || "" ? `${series}` : ""}</p>
              <div className={Vanilla.ArticleTitleWrapper} id="ArticleTitleWrapper">
                <h2 className={Vanilla.h2} id="ArticleTitle">
                  {truncatedTitle}
                </h2>
              </div>
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
