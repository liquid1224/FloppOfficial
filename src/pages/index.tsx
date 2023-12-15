//Default Components
import React from "react";
import { graphql, type HeadFC, PageProps, Link } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
//Author Components
import * as Vanilla from "../styles/index.css";
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { Button } from "../components/button";
import { ScrollIndecator } from "../components/scrollIndicator";
import { useIsDarkModeContext } from "../styles/context";

type IndexPageProps = {
  data: Queries.HeroInfoQuery;
};
const IndexPage = ({ data }: IndexPageProps) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isDarkMode = useIsDarkModeContext();
  const HeroInfo = ({ data }: IndexPageProps) => {
    const isDarkMode = useIsDarkModeContext();
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
                  <div className={`${Vanilla.HeroWorkImg} ${isDarkMode ? Vanilla.HeroWorkImgDark : ""}`}>
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
  type YouTubeContentsProps = {
    src: string;
  };
  const YouTubeContents = ({ src }: YouTubeContentsProps) => {
    const isDarkMode = useIsDarkModeContext();
    return (
      <div className={Vanilla.MoviesWrapper}>
        <div className={`${Vanilla.YouTubeWrapper} ${isDarkMode ? Vanilla.YouTubeWrapperDark : ""}`}>
          <iframe src={src} className={Vanilla.YouTube}></iframe>
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
            <div className={Vanilla.Separator} />
            <HeroPoem />
          </div>
          {isDesktop && <ScrollIndecator />}
        </div>
        <div className={`${Vanilla.Section} ${Vanilla.SectionElementsInversion}`}>
          <YouTubeContents src="https://www.youtube.com/embed/E3r26D4u4CE?si=eq8dT0VURpyah0Js" />
          <div className={Vanilla.MusicTextWrapper}>
            <h2 className={Vanilla.h2}>Musics</h2>
            <div className={Vanilla.MusicDescriptionsWrapper}>
              <p className={Vanilla.MusicDescription}>
                <h3 className={Vanilla.h2}>Synthetic/Symphonic</h3>
                幻惑的なシンセサウンドに，壮大なオーケストラ・叙事的な打楽器が絡む独特のサウンド．鋭さと立体感が共存する，ドラマチックなサウンドが特徴です．
              </p>
              <p className={Vanilla.MusicDescription}>
                <h3 className={Vanilla.h2}>Twisted Voice Magic</h3>
                震えるバスから鋭いファルセットまで，広い音域や多重録音をフル活用したボーカル．巨大なオーケストレーションの中でも燦然と輝く歌声を提供します．
              </p>
              <p className={Vanilla.MusicDescription}>
                <h3 className={Vanilla.h2}>Spellbound Lyrics</h3>
                隠喩と造語を多用する，難解かつ深遠な歌詞．繰り返し聴き，読み解くことで見えてくる圧倒的情報量の世界観がリスナーを魅了します．
              </p>
              <p className={Vanilla.MusicDescription}>
                <h3 className={Vanilla.h2}>Integrated Production</h3>
                構想から作編曲，レコーディングやポストプロダクションまで，全工程を担当可能．一貫性のあるプロダクションで安定したクオリティを保証します．
              </p>
            </div>
          </div>
        </div>
        <div className={Vanilla.SectionSeparator} />
        <div className={Vanilla.Section}>
          <div className={Vanilla.MusicTextWrapper}>
            <h2 className={Vanilla.h2}>Hardware & Software</h2>
            <p className={Vanilla.MusicDescription}>
              レーザーハープなど，電子楽器の設計・制作を行っています．また制作した電子楽器を用い，音響的なインパクトと視覚的な楽しさを両立したステージパフォーマンスも行います．
              <br />
              VSTプラグインなどの音響関連ソフトウェアの制作も進行中です．
            </p>
          </div>
          <YouTubeContents src="https://www.youtube.com/embed/-Qg9586n0Qw?si=Giem2z1CWN8wwkKQ" />
        </div>
      </>
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <Seo title="TOP"></Seo>;

export const query = graphql`
  query HeroInfo {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { fileAbsolutePath: { regex: "/works/" }, frontmatter: { index: { eq: "1" } } }, limit: 4) {
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
