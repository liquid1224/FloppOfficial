import * as React from "react";
import { Layout } from "../templates/layout";
import { Seo } from "../templates/seo";
import type { HeadFC } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <></>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="ABOUT"></Seo>;
