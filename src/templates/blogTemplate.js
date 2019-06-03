import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'

import { Wrap, MarkdownWrap } from './styled'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Helmet title={frontmatter.title} />

      <Wrap>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>
        <MarkdownWrap dangerouslySetInnerHTML={{ __html: html }} />
      </Wrap>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
