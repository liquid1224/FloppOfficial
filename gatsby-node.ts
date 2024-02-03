import { graphql, type GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions: { createPage } }) => {
  //Generate Work Pages
  const AllWorksSlug = await graphql<Queries.AllWorksSlugQuery>(`
    query AllWorksSlug {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  if (AllWorksSlug.errors) throw AllWorksSlug.errors;
  AllWorksSlug.data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/works/${node.frontmatter?.slug}`,
      component: path.resolve(`./src/templates/work.tsx`),
      context: { id: node.id },
    });
  });

  //Generate Article Pages
  const AllArticlesSlug = await graphql<Queries.AllArticlesSlugQuery>(`
    query AllArticlesSlug {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  if (AllArticlesSlug.errors) throw AllArticlesSlug.errors;
  AllArticlesSlug.data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter?.slug}`,
      component: path.resolve(`./src/templates/article.tsx`),
      context: { id: node.id },
    });
  });

  //Generate Article Pages with MDX
  const AllArticlesSlugMdx = await graphql<Queries.AllArticlesSlugMdxQuery>(`
    query AllArticlesSlugMdx {
      allMdx(filter: { internal: { contentFilePath: { regex: "/articlesMdx/" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  if (AllArticlesSlugMdx.errors) throw AllArticlesSlugMdx.errors;
  AllArticlesSlugMdx.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blogMdx/${node.frontmatter?.slug}`,
      component: path.resolve(`./src/templates/articleMdx.tsx`),
      context: { id: node.id },
    });
  });
};
