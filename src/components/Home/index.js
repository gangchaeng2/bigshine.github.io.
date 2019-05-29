import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap } from './styled'

const HomeComponent = () => {
  const { allMarkdownRemark: { edges} } = useStaticQuery(
    graphql`
      query HomepageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          totalCount,
          edges {
            node {
              frontmatter {
                title
                path
                date
                tags
              }
            }
          }
        }
      }
    `
  )
  
  const postsData = edges.map(edge => edge.node)

  return (
    <Wrap>
      {postsData.map(item => {
        const { frontmatter } = item

        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        )
      })}
    </Wrap>
  )
}

export default HomeComponent
