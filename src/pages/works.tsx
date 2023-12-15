//Default Components
import React, { useState } from "react";
import { HeadFC, Link, graphql } from "gatsby";
import { ImageDataLike, getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
//Author Components
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import { ButtonPushIn } from "../components/button";
import * as Vanilla from "../styles/works.css";
import { useIsDarkModeContext } from "../styles/context";

//Works List
type WorksListProps = {
  isAlbum: boolean;
  isSingle: boolean;
  isOtherFormat: boolean;
  isFlopp: boolean;
  isUma: boolean;
  isCompilation: boolean;
  isOtherProject: boolean;
  data: Queries.WorksDataQuery;
};
const WorksList = ({ isAlbum, isSingle, isOtherFormat, isFlopp, isUma, isCompilation, isOtherProject, data }: WorksListProps) => {
  //States
  const album = `${isAlbum ? "album" : ""}`;
  const single = `${isSingle ? "single" : ""}`;
  const otherFormat = `${isOtherFormat ? "other" : ""}`;
  const flopp = `${isFlopp ? "flopp" : ""}`;
  const uma = `${isUma ? "uma" : ""}`;
  const compilation = `${isCompilation ? "compilation" : ""}`;
  const otherProject = `${isOtherProject ? "other" : ""}`;
  //Node Filtering
  const filteredNodes = data.allMarkdownRemark.edges.filter(
    (node) =>
      node.node.frontmatter?.jacket !== null &&
      (node.node.frontmatter?.format === album || node.node.frontmatter?.format === single || node.node.frontmatter?.format === otherFormat) &&
      (node.node.frontmatter.project === flopp || node.node.frontmatter.project === uma || node.node.frontmatter.project === compilation || node.node.frontmatter.project === otherProject)
  );
  //Hover Detection
  const [hover, setHover] = useState(-1);
  const handleMouseEnter = (index: number) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(-1);
  };

  const isDarkMode = useIsDarkModeContext();

  return (
    <div className={Vanilla.WorksWrapper}>
      {filteredNodes.length === 0 ? (
        <p>Nothing Found</p>
      ) : (
        filteredNodes.map((node, index) => {
          const image = getImage(node.node.frontmatter?.jacket as ImageDataLike);
          return (
            <Link className={Vanilla.Link} to={`/works/${node.node.frontmatter?.slug as string}`} key={index}>
              <div className={`${Vanilla.WorkBox} ${isDarkMode ? Vanilla.WorkBoxDark : ""} ${index === hover ? Vanilla.WorkBoxHover : ""}`}>
                <GatsbyImage className={Vanilla.Image} image={image as IGatsbyImageData} alt={node.node.frontmatter?.title as string} />
                <div className={Vanilla.WorkBoxDescription} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave}>
                  <h3 className={`${Vanilla.ResetH} ${Vanilla.h3}`}>{!node.node.frontmatter?.compilationTitle ? null : `${node.node.frontmatter.compilationTitle}収録`}</h3>
                  <h2 className={Vanilla.ResetH}>{node.node.frontmatter?.title}</h2>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

//Works Function
type WorksFunctionProps = {
  data: Queries.WorksDataQuery;
};
const WorksFunction = ({ data }: WorksFunctionProps) => {
  // State for format of works (Single, Album...)
  const [isAlbum, setIsAlbum] = useState(true);
  const [isSingle, setIsSingle] = useState(true);
  const [isOtherFormat, setIsOtherFormat] = useState(true);
  const [isFlopp, setIsFlopp] = useState(true);
  const [isUma, setIsUma] = useState(true);
  const [isCompilation, setIsCompilation] = useState(true);
  const [isOtherProject, setIsOtherProject] = useState(true);

  const isDarkMode = useIsDarkModeContext();
  type ButtonSectionProps = {
    title: string;
    children: React.ReactElement;
  };
  const ButtonsSection = ({ title, children }: ButtonSectionProps) => {
    return (
      <div className={Vanilla.ButtonsSection}>
        <div className={Vanilla.ButtonsSectionTitle}>{title}</div>
        <div className={Vanilla.ButtonsWrapper}>{children}</div>
      </div>
    );
  };
  return (
    <>
      <div className={Vanilla.Buttons}>
        <div className={`${Vanilla.ButtonsSectionsWrapper} ${isDarkMode ? Vanilla.ButtonsSectionsWrapperDark : ""}`}>
          <ButtonsSection title="Project">
            <>
              <ButtonPushIn title="華力発電所" isPushed={isFlopp} onClick={() => setIsFlopp(!isFlopp)} />
              <ButtonPushIn title="馬骨擬装網" isPushed={isUma} onClick={() => setIsUma(!isUma)} />
              <ButtonPushIn title="Compilation" isPushed={isCompilation} onClick={() => setIsCompilation(!isCompilation)} />
              <ButtonPushIn title="Others" isPushed={isOtherProject} onClick={() => setIsOtherProject(!isOtherProject)} />
            </>
          </ButtonsSection>
          <span className={Vanilla.ButtonsSectionsSeparator} />
          <ButtonsSection title="Format">
            <>
              <ButtonPushIn title="Album" isPushed={isAlbum} onClick={() => setIsAlbum(!isAlbum)} />
              <ButtonPushIn title="Single" isPushed={isSingle} onClick={() => setIsSingle(!isSingle)} />
              <ButtonPushIn title="Others" isPushed={isOtherFormat} onClick={() => setIsOtherFormat(!isOtherFormat)} />
            </>
          </ButtonsSection>
        </div>
      </div>
      <div className={Vanilla.WorksListWrapper}>
        <WorksList isAlbum={isAlbum} isSingle={isSingle} isOtherFormat={isOtherFormat} isFlopp={isFlopp} isUma={isUma} isCompilation={isCompilation} isOtherProject={isOtherProject} data={data} />
      </div>
    </>
  );
};

//Works
type WorksPageProps = {
  data: Queries.WorksDataQuery;
};
const WorksPage = ({ data }: WorksPageProps) => {
  return (
    <Layout title="Works">
      <WorksFunction data={data} />
    </Layout>
  );
};
export default WorksPage;
export const Head: HeadFC = () => <Seo title="WORKS"></Seo>;

//Query
export const query = graphql`
  query WorksData {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { fileAbsolutePath: { regex: "/works/" } }) {
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
            project
            date
            compilationTitle
            description
          }
        }
      }
    }
  }
`;
