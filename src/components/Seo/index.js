import React from 'react'
import { Helmet } from 'react-helmet'
import { string, bool } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ lang, title, description, pathname, tag }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          keywords,
        },
      },
    }) => {
      const seo = {
        title: `${title || defaultTitle} ${tag ? '#' + tag : ''}`,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ''}`,
        keywords: keywords,
      }

      return (
        <>
          <Helmet
            htmlAttributes={{ lang }}
            title={seo.title}
            titleTemplate={titleTemplate}>
            
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={keywords.join(', ')} />

            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />

            <meta name="naver-site-verification" content="6b161302080694a9b419aac5df30199955e6566e"/>
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: string,
  description: string,
  pathname: string,
  article: bool,
  lang: string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false,
  lang: 'ko',
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        keywords
      }
    }
  }
`
