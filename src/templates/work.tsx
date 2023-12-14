import React from "react";
import { Layout } from "./layout";
import { graphql } from "gatsby";

type WorksPageTemplateProps = {
  data: Queries.WorkMetaDataQuery;
};
export const WorkPageTemplate = ({ data }: WorksPageTemplateProps) => {
  const works = data.allMarkdownRemark.nodes;
  const title = works[0].frontmatter?.title;
  return (
    <Layout>
      <div>{title}</div>
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
