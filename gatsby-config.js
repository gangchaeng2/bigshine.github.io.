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
    url: 'https://bigshine.netlify.com',
    siteUrl: 'https://bigshine.netlify.com',
  },
  pathPrefix: "/gangchaeng2.github.io",
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140924264-1",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
  ]
  /* Your site config here */
}
