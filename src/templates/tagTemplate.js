import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Home from 'containers/Home'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const item = {
    tag,
    list: edges,
  }

  return (
    <Layout {...item}>
      <Home {...item} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            description
            tags
          }
        }
      }
    }
  }
`
