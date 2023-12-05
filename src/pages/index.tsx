import * as React from "react";
import * as Vanilla from "./index.css";
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { graphql, type HeadFC, PageProps, Link } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type IndexPageProps = {
  data: Queries.HeroInfoQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <>
        <div className={Vanilla.HeroWrapper}>
          <div className={Vanilla.HeroContents}>
            <div className={Vanilla.HeroInfo}>
              {data.allMarkdownRemark.edges.map((node, index) => {
                if (node.node.frontmatter?.jacket !== null) {
                  const image = getImage(node.node.frontmatter?.jacket as ImageDataLike);
                  const link = `${node.node.frontmatter?.slug as string}`;
                  const title = node.node.frontmatter?.title as string;
                  return (
                    <Link to={link} key={index}>
                      <div className={Vanilla.HeroInfoImg}>
                        <GatsbyImage image={image as IGatsbyImageData} alt={title} className="HeroInfoItemImg" />
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
            <div className={Vanilla.Separator}></div>
            <div className={Vanilla.HeroPoem}>
              <h1>
                Progressive
                <br />
                Synthpop
                <br />
                Engineer
              </h1>
              <p className={Vanilla.HeroPoemSentence}>
                華力発電所は，liquid1224による音楽関連プロジェクトです． シンフォニックで壮大なオーケストレーションと，プログレッシブな楽曲展開により，独自の音楽世界を展開しています．
              </p>
            </div>
          </div>
          <div className={Vanilla.HeroScrollWrapper}></div>
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
