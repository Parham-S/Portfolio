module.exports = {
  siteMetadata: {
    title: `Parham Saniei`,
    description: `Software Developer Portfolio`,
    author: `@ParhamSaniei`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
};
