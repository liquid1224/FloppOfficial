import React from "react";
import { HeadFC, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//Author Components
import { Layout } from "./layout";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";
import * as Vanilla from "../styles/work.css";
import * as VanillaLinkBoxAssets from "../components/linkBoxAssets.css";
import { useIsDarkModeContext } from "../styles/context";
import { Seo } from "./seo";

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
  const works = data.allMarkdownRemark.nodes;
  const jacket = getImage(works[0].frontmatter?.jacket as ImageDataLike);
  const description = works[0].frontmatter?.description as string;
  const compilation = works[0].frontmatter?.compilationTitle as string;
  const title = works[0].frontmatter?.title as string;
  const date = works[0].frontmatter?.date as string;
  const copy = works[0].frontmatter?.copy;
  const copySplited = works[0].frontmatter?.copy?.split("\n");
  const project = Project(works[0].frontmatter?.project as string);
  const projectCustom = works[0].frontmatter?.projectCustom as string;
  const spotify = works[0].frontmatter?.idSpotify;
  const appleMusic = works[0].frontmatter?.idAppleMusic;
  const amazonMusic = works[0].frontmatter?.idAmazonMusic;
  const youtube = works[0].frontmatter?.idYouTube;
  const lineMusic = works[0].frontmatter?.idLineMusic;
  const boothCD = works[0].frontmatter?.linkBoothCD;
  const boothDL = works[0].frontmatter?.linkBoothDL;
  const bandcamp = works[0].frontmatter?.linkBandcamp;

  const IsStreamed = () => {
    if (spotify !== null || appleMusic !== null || amazonMusic !== null || youtube !== null || lineMusic !== null) return true;
    else return false;
  };
  const IsSold = () => {
    if (bandcamp !== null || boothCD !== null || boothDL !== null) return true;
    else return false;
  };

  const Jacket = () => {
    const isDarkMode = useIsDarkModeContext();
    return (
      <div className={Vanilla.JacketWrapper}>
        <GatsbyImage image={jacket as IGatsbyImageData} alt={title} className={`${Vanilla.Jacket} ${isDarkMode ? Vanilla.JacketDark : ""}`} />
      </div>
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
            <h1 className={Vanilla.h1}>{title}</h1>
            {/* date */}
            <div>Release</div>
            <div className={Vanilla.Separator} />
            <p className={Vanilla.Item}>{date}</p>
            {/* project */}
            <div>Project</div>
            <div className={Vanilla.Separator} />
            <p className={Vanilla.Item}>{project !== null ? project : projectCustom}</p>
            {/* copy */}
            {copy !== null && (
              <>
                <div>Description</div>
                <div className={Vanilla.Separator} />
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
            <h2 className={Vanilla.h2}>Streaming</h2>
            <div className={Vanilla.SeparatorBold} />
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
            <h2 className={Vanilla.h2}>Store</h2>
            <div className={Vanilla.SeparatorBold} />
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

export const Head: HeadFC<Queries.WorkMetaDataQuery> = ({ data }) => <Seo title={data.allMarkdownRemark.nodes[0].frontmatter?.title as string}></Seo>;

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
            }
          }
        }
        id
      }
    }
  }
`;
