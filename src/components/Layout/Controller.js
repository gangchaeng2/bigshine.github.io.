import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Seo from 'components/Seo'
// import Header from 'components/Header'

import { Wrap } from './styled'

export default LayoutComponent => {
  return ({ ...props }) => {
    const { tag } = {...props}
    const { site } = useStaticQuery(
      graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )

    return (
      <Wrap>
        <Seo title={site.siteMetadata.title} tag={tag}/>
        {/* <Header /> */}
        <LayoutComponent {...props} />
      </Wrap>
    )
  }
}
