//Default Components
import React, { useState } from "react";
import { HeadFC, graphql } from "gatsby";
//Author Components
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { ButtonPushIn } from "../components/button";
import * as Vanilla from "./works.css";

type WorksPageProps = {
  data: Queries.HeroInfoQuery;
};
const WorksPage = ({ data }: WorksPageProps) => {
  // State for format of works (Single, Album...)
  const [isAlbum, setIsAlbum] = useState(true);
  const [isSingle, setIsSingle] = useState(true);
  const [isOtherFormat, setIsOtherFormat] = useState(true);
  const [isFlopp, setIsFlopp] = useState(true);
  const [isUma, setIsUma] = useState(true);
  const [isCompilation, setIsCompilation] = useState(true);
  const [isOtherProject, setIsOtherProject] = useState(true);

  return (
    <Layout title="Works">
      <div className={Vanilla.Buttons}>
        <div className={Vanilla.ButtonsSectionsWrapper}>
          <div className={Vanilla.ButtonsSection}>
            <div className={Vanilla.ButtonsSectionTitle}>Format</div>
            <div className={Vanilla.ButtonsWrapper}>
              <ButtonPushIn title="Album" isPushed={isAlbum} onClick={() => setIsAlbum(!isAlbum)} />
              <ButtonPushIn title="Single" isPushed={isSingle} onClick={() => setIsSingle(!isSingle)} />
              <ButtonPushIn title="Other" isPushed={isOtherFormat} onClick={() => setIsOtherFormat(!isOtherFormat)} />
            </div>
          </div>
          <span className={Vanilla.ButtonsSectionsSeparator} />
          <div className={Vanilla.ButtonsSection}>
            <div className={Vanilla.ButtonsSectionTitle}>Project</div>
            <div className={Vanilla.ButtonsWrapper}>
              <ButtonPushIn title="華力発電所" isPushed={isFlopp} onClick={() => setIsFlopp(!isFlopp)} />
              <ButtonPushIn title="馬骨擬装網" isPushed={isUma} onClick={() => setIsUma(!isUma)} />
              <ButtonPushIn title="Compilation" isPushed={isCompilation} onClick={() => setIsCompilation(!isCompilation)} />
              <ButtonPushIn title="Other" isPushed={isOtherProject} onClick={() => setIsOtherProject(!isOtherProject)} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorksPage;

export const Head: HeadFC = () => <Seo title="Works"></Seo>;

export const query = graphql`
  query WorksData {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
            format
            date
            compilationTitle
            description
          }
        }
      }
    }
  }
`;
