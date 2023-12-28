import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ogpDefault from "../images/ogpDefault.jpg";

type SeoProps = {
  description?: string;
  title: string;
  path?: string;
  slug?: string;
  ogpImagePath?: string;
};

export const Seo = ({ description, title, path, slug, ogpImagePath }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const siteDataDescription = description || site.siteMetadata.description;
  const siteDataTitle = site.siteMetadata?.title;
  const siteUrl = site.siteMetadata?.siteUrl;
  const image = ogpImagePath ? `${siteUrl}${ogpImagePath}` : `${siteUrl}${ogpDefault}`;

  return (
    <>
      <title>{siteDataTitle ? `${title} / ${siteDataTitle}` : title}</title>
      <meta property="robots" content="index,follow" />
      <meta name="description" content={description ? description : siteDataDescription} />
      <meta property="og:url" content={`${siteUrl}${path ? path : ""}${slug ? slug : ""}`} />
      <meta property="og:title" content={`${title} / ${siteDataTitle}`} />
      <meta property="og:description" content={siteDataDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={`${title} / ${siteDataTitle}`} />
      <meta name="twitter:description" content={siteDataDescription} />
    </>
  );
};
export default Seo;
