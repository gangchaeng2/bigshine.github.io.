import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import List from './Component/List'

import { Wrap, Section } from './styled'

const PostComponent = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query NewHomepageQuery {
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
  )

  const postsData = edges.map(edge => edge.node)
  const stat = {
    postsData,
  }

  return (
    <Wrap>
      <Section>
        <h2>최근 포스트</h2>
      </Section>

      <List {...stat} />
    </Wrap>
  )
}

export default PostComponent
