/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityProject || {}).edges || [];

  projectEdges.forEach((edge) => {
    const id = edge.node.id;
    const slug = edge.node.slug.current;
    const path = `/project/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/features/project/components/TemplateProject/index.tsx"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};
