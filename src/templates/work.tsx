import React from "react";
import { HeadFC, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//Author Components
import { Layout } from "./layout";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";
import { ImageFrame } from "../components/imageFrame";
import { Seo } from "./seo";
import * as Vanilla from "../styles/work.css";
import * as VanillaLinkBoxAssets from "../components/linkBoxAssets.css";

type WorksPageTemplateProps = {
  data: Queries.WorkMetaDataQuery;
};
export const WorkPageTemplate = ({ data }: WorksPageTemplateProps) => {
  const Project = (project: string) => {
    switch (project) {
      case "flopp":
        return "華力発電所";
      case "uma":
        return "馬骨擬装網";
      case "compilation":
        return null;
      case "other":
        return null;
    }
  };
  const works = data.allMarkdownRemark.nodes[0];
  const jacket = getImage(works.frontmatter?.jacket as ImageDataLike);
  const description = works.frontmatter?.description as string;
  const compilation = works.frontmatter?.compilationTitle as string;
  const title = works.frontmatter?.title as string;
  const date = works.frontmatter?.date as string;
  const copy = works.frontmatter?.copy;
  const copySplited = works.frontmatter?.copy?.split("\n");
  const project = Project(works.frontmatter?.project as string);
  const projectCustom = works.frontmatter?.projectCustom as string;
  const spotify = works.frontmatter?.idSpotify;
  const appleMusic = works.frontmatter?.idAppleMusic;
  const amazonMusic = works.frontmatter?.idAmazonMusic;
  const youtube = works.frontmatter?.idYouTube;
  const lineMusic = works.frontmatter?.idLineMusic;
  const boothCD = works.frontmatter?.linkBoothCD;
  const boothDL = works.frontmatter?.linkBoothDL;
  const bandcamp = works.frontmatter?.linkBandcamp;

  const IsStreamed = () => {
    if (spotify !== null || appleMusic !== null || amazonMusic !== null || youtube !== null || lineMusic !== null) return true;
    else return false;
  };
  const IsSold = () => {
    if (bandcamp !== null || boothCD !== null || boothDL !== null) return true;
    else return false;
  };

  const Jacket = () => {
    return (
      <ImageFrame isSmall={false} isFloat={false}>
        <GatsbyImage image={jacket as IGatsbyImageData} alt={title} />
      </ImageFrame>
    );
  };

  return (
    <Layout>
      <div className={Vanilla.WorksPageTemplateWrapper}>
        <div className={Vanilla.WorksDescriptionsWrapper}>
          <Jacket />
          <div className={Vanilla.DescriptionsWrapper}>
            {/* title */}
            {(description !== "" || compilation !== "") && (
              <div>
                {description !== "" && description} {compilation !== "" && `"${compilation}"`}
              </div>
            )}
            <h1 className={`${Vanilla.NoMargin}`}>{title}</h1>
            {/* date */}
            <div className={Vanilla.Underline}>Release</div>
            <p className={Vanilla.Item}>{date}</p>
            {/* project */}
            <div className={Vanilla.Underline}>Project</div>
            <p className={Vanilla.Item}>{project !== null ? project : projectCustom}</p>
            {/* copy */}
            {copy !== null && (
              <>
                <div className={Vanilla.Underline}>Description</div>
                <p className={`${Vanilla.Copy} ${Vanilla.Item}`}>
                  {copySplited?.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </p>
              </>
            )}
          </div>
        </div>
        {IsStreamed() && (
          <div className={Vanilla.Gallery}>
            {spotify !== null && <iframe src={`https://open.spotify.com/embed/album/${spotify}`} loading="lazy" className={Vanilla.Embed} />}
            {appleMusic !== null && <iframe src={`https://embed.music.apple.com/jp/album/${appleMusic}`} loading="lazy" className={Vanilla.Embed} />}
            {amazonMusic !== null && <iframe src={`https://music.amazon.co.jp/embed/${amazonMusic}`} loading="lazy" className={Vanilla.Embed} />}
            {youtube !== null && <iframe src={`https://www.youtube.com/embed/?listType=playlist&list=${youtube}`} loading="lazy" className={Vanilla.Embed} />}
          </div>
        )}
        {IsStreamed() && (
          <div className={Vanilla.Section}>
            <h2 className={`${Vanilla.NoMargin} ${Vanilla.Underline}`}>Streaming</h2>
            <div className={Vanilla.LinksWrapper}>
              {(spotify !== null || undefined) && <LinkBox icon={Icons.spotify} text="Spotify" link={`https://open.spotify.com/intl-ja/album/${spotify}`} style={VanillaLinkBoxAssets.Spotify} />}
              {(appleMusic !== null || undefined) && (
                <LinkBox icon={Icons.appleMusic} text="Apple Music" link={`https://music.apple.com/jp/album/${appleMusic}`} style={VanillaLinkBoxAssets.AppleMusic} />
              )}
              {(amazonMusic !== null || undefined) && (
                <LinkBox icon={Icons.amazon} text="Amazon Music" link={`https://music.amazon.co.jp/albums${appleMusic}`} style={VanillaLinkBoxAssets.AmazonMusic} />
              )}
              {(youtube !== null || undefined) && (
                <LinkBox icon={Icons.youtubeMusic} text="YouTube Music" link={`https://music.youtube.com/playlist?list=${youtube}`} style={VanillaLinkBoxAssets.YouTube} />
              )}
              {(youtube !== null || undefined) && <LinkBox icon={Icons.youtube} text="YouTube" link={`https://www.youtube.com/playlist?list=${youtube}`} style={VanillaLinkBoxAssets.YouTube} />}
              {(lineMusic !== null || undefined) && (
                <LinkBox icon={Icons.lineMusic} text="Line Music" link={`https://music.line.me/webapp/album/${lineMusic}`} style={VanillaLinkBoxAssets.LineMusic} />
              )}
            </div>
          </div>
        )}
        {IsSold() && (
          <div className={Vanilla.Section}>
            <h2 className={`${Vanilla.NoMargin} ${Vanilla.Underline}`}>Store</h2>
            <div className={Vanilla.LinksWrapper}>
              {(boothCD !== null || undefined) && <LinkBox icon={Icons.booth} text="Booth(CD)" link={boothCD as string} style={VanillaLinkBoxAssets.Booth} />}
              {(boothDL !== null || undefined) && <LinkBox icon={Icons.booth} text="Booth(DL)" link={boothDL as string} style={VanillaLinkBoxAssets.Booth} />}
              {(bandcamp !== null || undefined) && <LinkBox icon={Icons.bandcamp} text="Bandcamp" link={bandcamp as string} style={VanillaLinkBoxAssets.Bandcamp} />}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default WorkPageTemplate;

export const Head: HeadFC<Queries.WorkMetaDataQuery> = ({ data }) => (
  <Seo title={data.allMarkdownRemark.nodes[0].frontmatter?.title as string} ogpImagePath={data.allMarkdownRemark.nodes[0].frontmatter?.jacket?.childImageSharp?.fixed?.src}></Seo>
);

export const query = graphql`
  query WorkMetaData($id: String!) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" }, id: { eq: $id } }) {
      nodes {
        frontmatter {
          compilationTitle
          copy
          date
          description
          format
          idAmazonMusic
          idAppleMusic
          idLineMusic
          idSpotify
          idYouTube
          linkBandcamp
          linkBoothCD
          linkBoothDL
          linkSpecial
          project
          projectCustom
          slug
          title
          jacket {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
              fixed {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`;
