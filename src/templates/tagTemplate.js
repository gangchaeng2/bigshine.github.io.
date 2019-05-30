import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Seo from 'components/Seo'
import Layout from 'components/Layout'
import Home from 'components/Home'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const item = {
    tag,
    list: edges,
  }

  return (
    <Layout>
      <Seo {...item} />
      <Home {...item}  />
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
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
            title
          }
        }
      }
    }
  }
`
