import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
//Author Components
import { Layout } from "./layout";
import * as Vanilla from "./work.css";
import { LinkBox } from "../components/linkBox";
import { Icons } from "../components/icons";

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
      case "compilation" || "other":
        return null;
    }
  };
  const works = data.allMarkdownRemark.nodes;
  const jacket = getImage(works[0].frontmatter?.jacket as ImageDataLike);
  const description = works[0].frontmatter?.description as string;
  const compilation = works[0].frontmatter?.compilationTitle as string;
  const title = works[0].frontmatter?.title as string;
  const date = works[0].frontmatter?.date as string;
  const copy = works[0].frontmatter?.copy?.split("\n");
  const project = Project(works[0].frontmatter?.project as string);
  const projectCustom = works[0].frontmatter?.projectCustom as string;
  const spotify = works[0].frontmatter?.idSpotify;

  console.log(spotify);
  return (
    <Layout>
      <div className={Vanilla.WorksPageTemplateWrapper}>
        <div className={Vanilla.WorksDescriptionsWrapper}>
          <div className={Vanilla.JacketWrapper}>
            <GatsbyImage image={jacket as IGatsbyImageData} alt={title} className={Vanilla.Jacket} />
          </div>
          <div className={Vanilla.DescriptionsWrapper}>
            {/* title */}
            {(description !== "" || compilation !== "") && (
              <div>
                {description !== "" && description} {compilation !== "" && `"${compilation}"`}
              </div>
            )}
            <h2 className={Vanilla.item}>{title}</h2>
            {/* date */}
            <div>Release</div>
            <div className={Vanilla.Separator} />
            <p className={Vanilla.item}>{date}</p>
            {/* project */}
            <div>Project</div>
            <div className={Vanilla.Separator} />
            <p className={Vanilla.item}>{project !== null ? project : projectCustom}</p>
            {/* copy */}
            <div>Description</div>
            <div className={Vanilla.Separator} />
            <p className={`${Vanilla.Copy} ${Vanilla.item}`}>
              {copy?.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </p>
          </div>
        </div>
        <div className={Vanilla.LinksWrapper}>
          {(spotify !== null || undefined) && <LinkBox icon={Icons.spotify} text="Spotify" link={`https://open.spotify.com/intl-ja/album/${spotify}`} style={Vanilla.Spotify} />}
        </div>
      </div>
    </Layout>
  );
};
export default WorkPageTemplate;

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
          headerSpecial
          idAmazonMusic
          idAppleMusic
          idSpotify
          idYouTube
          idYouTubeMusic
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
