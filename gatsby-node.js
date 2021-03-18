const path = require(`path`);

const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

/**
 * Creates all pages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
      {
        allPrismicPage {
          edges {
            node {
              uid
              data {
                title
                template
              }
            }
          }
        }
      }
    `)
  );

  const pages = result.data.allPrismicPage.edges;
  pages.forEach(({ node }) => {
    const template = node.data.template ? node.data.template : 'page-template';
    const pageTemplate = require.resolve(`./src/templates/${template}.js`);
    const pathUrl = node.uid === 'home' ? `/` : `/${node.uid}`;
    createPage({
      path: pathUrl,
      component: pageTemplate,
      context: {
        uid: node.uid,
        title: node.data.title
      }
    });
  });
};
