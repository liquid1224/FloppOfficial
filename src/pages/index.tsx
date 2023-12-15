//Default Components
import React from "react";
import { graphql, type HeadFC, PageProps, Link } from "gatsby";
import { ImageDataLike, getImage } from "gatsby-plugin-image";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
//Author Components
import * as Vanilla from "./index.css";
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { Button } from "../components/button";
import { ScrollIndecator } from "../components/scrollIndicator";

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
            <div className={Vanilla.Separator} />
            <HeroPoem />
          </div>
          {isDesktop && <ScrollIndecator />}
        </div>
        <div className={`${Vanilla.Section} ${Vanilla.SectionElementsInversion}`}>
          <div className={Vanilla.MoviesWrapper}>
            <div className={Vanilla.YouTubeWrapper}>
              <iframe
                src="https://www.youtube.com/embed/E3r26D4u4CE?si=eq8dT0VURpyah0Js"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className={Vanilla.YouTube}
              />
            </div>
          </div>
          <div className={Vanilla.MusicTextWrapper}>
            <h2>Musics</h2>
            <div className={Vanilla.MusicDescriptionsWrapper}>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
            </div>
          </div>
        </div>
        <div className={Vanilla.SectionSeparator} />
        <div className={Vanilla.Section}>
          <div className={Vanilla.MusicTextWrapper}>
            <h2>Hardwares</h2>
            <div className={Vanilla.MusicDescriptionsWrapper}>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
            </div>
          </div>
          <div className={Vanilla.MoviesWrapper}>
            <div className={Vanilla.YouTubeWrapper}>
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/E3r26D4u4CE?si=eq8dT0VURpyah0Js"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className={Vanilla.YouTube}
              />
            </div>
          </div>
        </div>
        <div className={Vanilla.SectionSeparator} />
        <div className={`${Vanilla.Section} ${Vanilla.SectionElementsInversion}`}>
          <div className={Vanilla.MoviesWrapper}>
            <div className={Vanilla.YouTubeWrapper}>
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/E3r26D4u4CE?si=eq8dT0VURpyah0Js"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className={Vanilla.YouTube}
              />
            </div>
          </div>
          <div className={Vanilla.MusicTextWrapper}>
            <h2>VST Plugins</h2>
            <div className={Vanilla.MusicDescriptionsWrapper}>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
              <p className={Vanilla.MusicDescription}>
                祇園精舎の鐘の声、諸行無常の響きあり。沙羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久からず、ただ春の夜の夢のごとし。猛き者も遂にはほろびぬ、偏に風の前の塵におなじ。
              </p>
            </div>
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
