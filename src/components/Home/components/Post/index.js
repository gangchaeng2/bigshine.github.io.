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
  if (node.children && node.children.length > 0) {

  }
}

const koreanTagRemover = (html) => {
  let array = []
  const isKoreanTag = /[<][ㄱ-ㅎ|ㅏ\sㅣ|가-힣]*[>]/gm

  while(array = isKoreanTag.exec(html)) {
    html = html.replace(array['0'], array['0'].replace('<', '[').replace('>', '] '))
  }

  return html
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
        const koreanTagRemove = koreanTagRemover(html)
        const text = join(ReactHtmlParser(koreanTagRemove, options).filter(n => n), ' ')

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
