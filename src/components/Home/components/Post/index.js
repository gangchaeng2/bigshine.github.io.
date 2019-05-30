import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap, Title } from './styled'

function transform(node) {
  console.log(node)
}

export default ({ list }) => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query HomepageQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
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
        const { fields, frontmatter, html } = item
        return (
          <li key={fields.slug}>
            <Link to={fields.slug}>
              <Title>{frontmatter.title}</Title>
              {ReactHtmlParser(html, transform)}
            </Link>
          </li>
        )
      })}
    </Wrap>
  )
}
