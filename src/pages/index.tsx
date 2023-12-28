//Default Components
import React, { useEffect, useRef, useState } from "react";
import { graphql, type HeadFC, Link } from "gatsby";
import { ImageDataLike, getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
//Author Components
import * as Vanilla from "../styles/index.css";
import { Layout } from "../templates/layout";
import { Button } from "../components/button";
import { ImageFrame } from "../components/imageFrame";
import { ScrollIndicator } from "../components/scrollIndicator";
import { YouTubeLoader } from "../components/youtubeLoader";
import { Seo } from "../templates/seo";
import { SeparatorHorizontal, SeparatorVertical } from "../components/separators";

type IndexPageProps = {
  data: Queries.HeroInfoQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const HeroInfo = ({ data }: IndexPageProps) => {
    return (
      <div className={Vanilla.HeroInfo}>
        <div className={Vanilla.HeroWorks}>
          {data.allMarkdownRemark.edges.map((node, index) => {
            if (node.node.frontmatter?.jacket !== null) {
              const image = getImage(node.node.frontmatter?.jacket as ImageDataLike);
              const link = `/works/${node.node.frontmatter?.slug as string}`;
              const title = node.node.frontmatter?.title as string;
              return (
                <Link to={link} key={index}>
                  <ImageFrame isSmall={false} isFloat={true}>
                    <GatsbyImage image={image as IGatsbyImageData} alt={title} className="HeroInfoItemImg" loading="eager" />
                  </ImageFrame>
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
          <br />
          シンフォニックとテクノポップの融合，ハードウェア製作，
          <br />
          ステージパフォーマンスなど独自の音楽世界を展開しています．
        </p>
        <div className={Vanilla.HeroPoemLink}>
          <Button link="about" title="about me →" />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <>
        <div className={Vanilla.HeroWrapper}>
          <div className={Vanilla.HeroContents}>
            <HeroInfo data={data} />
            {isDesktop ? <SeparatorVertical isBold={true} /> : null}
            <HeroPoem />
          </div>
          {isDesktop && <ScrollIndicator />}
        </div>
        <div className={Vanilla.IndexContentsWrapper}>
          <div className={`${Vanilla.Section} ${Vanilla.SectionElementsInversion}`}>
            <div className={Vanilla.MoviesWrapper}>
              <YouTubeLoader id="E3r26D4u4CE" />
            </div>
            <div className={Vanilla.MusicTextWrapper}>
              <h2 className={Vanilla.h2}>Musics</h2>
              <div className={Vanilla.MusicDescriptionsWrapper}>
                <div className={Vanilla.MusicDescription}>
                  <h3 className={Vanilla.h2}>Synthetic/Symphonic</h3>
                  幻惑的なシンセサウンドに，壮大なオーケストラ・叙事的な打楽器が絡む独特のサウンド．鋭さと立体感が共存する，ドラマチックなサウンドが特徴です．
                </div>
                <div className={Vanilla.MusicDescription}>
                  <h3 className={Vanilla.h2}>Twisted Voice Magic</h3>
                  震えるバスから鋭いファルセットまで，広い音域や多重録音をフル活用したボーカル．巨大なオーケストレーションの中でも燦然と輝く歌声を提供します．
                </div>
                <div className={Vanilla.MusicDescription}>
                  <h3 className={Vanilla.h2}>Spellbound Lyrics</h3>
                  隠喩と造語を多用する，難解かつ深遠な歌詞．繰り返し聴き，読み解くことで見えてくる圧倒的情報量の世界観がリスナーを魅了します．
                </div>
                <div className={Vanilla.MusicDescription}>
                  <h3 className={Vanilla.h2}>Integrated Production</h3>
                  構想から作編曲，レコーディングやポストプロダクションまで，全工程を担当可能．一貫性のあるプロダクションで安定したクオリティを保証します．
                </div>
              </div>
            </div>
          </div>
          <SeparatorHorizontal />
          <div className={Vanilla.Section}>
            <div className={Vanilla.MusicTextWrapper}>
              <h2 className={Vanilla.h2}>Hardware & Software</h2>
              <p className={Vanilla.MusicDescription}>
                レーザーハープなど，電子楽器の設計・制作を行っています．また制作した電子楽器を用い，音響的なインパクトと視覚的な楽しさを両立したステージパフォーマンスも行います．
                <br />
                VSTプラグインなどの音響関連ソフトウェアの制作も進行中です．
              </p>
            </div>
            <div className={Vanilla.MoviesWrapper}>
              <YouTubeLoader id="-Qg9586n0Qw" />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <Seo title="TOP" />;

export const query = graphql`
  query HeroInfo {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { fileAbsolutePath: { regex: "/works/" }, frontmatter: { index: { eq: "1" } } }, limit: 4) {
      edges {
        node {
          frontmatter {
            title
            jacket {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 600, height: 600)
              }
            }
            slug
          }
        }
      }
    }
  }
`;
