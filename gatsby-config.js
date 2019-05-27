const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Bigshine Blog`,
    titleTemplate: "%s :)",
    description: 'Bigshine 블로그 입니다',
    keywords: ['프론트엔드', '웹개발자', 'FrontEnd', 'WebDeveloper', 'Bigshine'],
    url: "https://gangchaeng2.github.io/bigshine/",
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
      }
    },
  ]
  /* Your site config here */
}
