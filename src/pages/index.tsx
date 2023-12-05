import * as React from "react";
import * as Vanilla from "./index.css";
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { graphql, type HeadFC, PageProps, Link } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../components/button";
import MediaQuery from "react-responsive";

type IndexPageProps = {
  data: Queries.HeroInfoQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  const HeroInfo = ({ data }: IndexPageProps) => {
    return (
      <div className={Vanilla.HeroInfo}>
        <div className={Vanilla.HeroWorks}>
          {data.allMarkdownRemark.edges.map((node, index) => {
            if (node.node.frontmatter?.jacket !== null) {
              const image = getImage(node.node.frontmatter?.jacket as ImageDataLike);
              const link = `${node.node.frontmatter?.slug as string}`;
              const title = node.node.frontmatter?.title as string;
              return (
                <Link to={link} key={index}>
                  <div className={Vanilla.HeroWorkImg}>
                    <GatsbyImage image={image as IGatsbyImageData} alt={title} className="HeroInfoItemImg" />
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <Button link="works" title="more works →" />
      </div>
    );
  };
  const HeroPoem = () => {
    return (
      <div className={Vanilla.HeroPoem}>
        <h1>
          Progressive
          <br />
          Synthpop
          <br />
          Engineer
        </h1>
        <p className={Vanilla.HeroPoemSentence}>
          華力発電所は，liquid1224による音楽関連プロジェクトです．
          シンフォニックで壮大なオーケストレーションとテクノポップの融合，プログレッシブな楽曲展開，ハードウェア製作から始まるステージパフォーマンスなどにより，独自の音楽世界を展開しています．
        </p>
      </div>
    );
  };
  return (
    <Layout>
      <>
        <div className={Vanilla.HeroWrapper}>
          <div className={Vanilla.HeroContents}>
            <HeroInfo data={data} />
            <div className={Vanilla.Separator}></div>
            <HeroPoem />
          </div>
          <div className={Vanilla.HeroScrollWrapper}>
            <svg className={Vanilla.ArrowsWrapper}>
              <path className={Vanilla.Path1} d="M0 0 L20 21 L40 0"></path>
              <path className={Vanilla.Path2} d="M0 15 L20 36 L40 15"></path>
              <path className={Vanilla.Path3} d="M0 30 L20 51 L40 30"></path>
            </svg>
          </div>
        </div>
      </>
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <Seo title="TOP"></Seo>;

export const query = graphql`
  query HeroInfo {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 4) {
      edges {
        node {
          frontmatter {
            title
            jacket {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            slug
          }
        }
      }
    }
  }
`;
