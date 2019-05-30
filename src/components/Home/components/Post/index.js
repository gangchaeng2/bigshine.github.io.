import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap } from './styled'

export default ({ list }) => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query HomepageQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )

  const items = list ? list : edges
  const postsData = items.map(edge => edge.node)

  return (
    <Wrap>
      {postsData.map(item => {
        const { fields, frontmatter } = item
        return (
          <div key={fields.slug}>
            <Link to={fields.slug}>{frontmatter.title}</Link>
          </div>
        )
      })}
    </Wrap>
  )
}
