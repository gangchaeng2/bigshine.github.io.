import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { join } from 'lodash'

import { Wrap, Title } from './styled'

const options = {
  decodeEntities: true,
  transform
}

// function transform(node) {
//   if (node.children && node.children.length > 0) {
    
//     node.children.map(item => {
//       return item.data
//     })

//   } else if (node.type === 'text') {
//     return node.data
//   }
// }

function transform(node, index) {
  if (node.type === 'tag' && (node.name === 'table' || node.name === 'br')) {
    return null
  }
  if (node.name === 'span') {
    return node.children[0].data
  }
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
        console.log(ReactHtmlParser(html, options))
        return (
          <li key={fields.slug}>
            <Link to={fields.slug}>
              <Title>{frontmatter.title}</Title>
            </Link>
          </li>
        )
      })}
    </Wrap>
  )
}
