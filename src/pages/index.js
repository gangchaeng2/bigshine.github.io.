import React from 'react'
import { graphql, Link } from 'gatsby'

import Seo from 'components/Seo'
import Layout from 'components/Layout'

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Seo />
      {edges.map(edge => {
        const { frontmatter } = edge.node

        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
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

export default Index
