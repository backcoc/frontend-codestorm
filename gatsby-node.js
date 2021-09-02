/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
// if (stage === "build-html" || stage === "develop-html") {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /bad-module/,
//           use: loaders.null(),
//         },
//       ],
//     },
//   })
// }
// }

// exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
//   if (
//     stage === "build-html" ||
//     stage === "develop-html" ||
//     stage === "develop"
//   ) {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /xterm|xterm-addon-fit/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
const path = require("path");
const { node } = require("prop-types");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
      },
    },
  });
};



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allStrapiArticle {
        nodes {
          Slug
          title
          image {
            formats{
              large{
                url
              }
            }
          }
          body
          date
        }
      }
      allStrapiPortfolio {
        nodes {
          Slug
          image {
            formats {
              thumbnail{
                url
              }
              large{
                url
              }
            }
          }
          title
          body
          categories
          date
          social {
            LinkedinProfiles
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allStrapiArticle.nodes.forEach(node => {
      // console.log("init");
      console.log("articles",node);
      const slug = node.Slug
      actions.createPage({
        path: slug,
        component: path.resolve('./src/pages/blog-single.js'),
        context: {
          slug: slug,
          data: node
        },
      });
    });
    result.data.allStrapiPortfolio.nodes.forEach(node => {
      // console.log("init");
      console.log(" ye he portfolio",node);
      const sluggish = node.Slug
      actions.createPage({
        path: '/portfolio/' + sluggish,
        component: path.resolve('./src/pages/portfolio-details.js'),
        context: {
          slug: sluggish,
          data: node
        },
      });
    });
  })
  
}



