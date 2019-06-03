import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap, PostCard, Title, Desc, Date, Tag } from './styled'

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

  const items = list ? list : edges
  const postsData = items.map(edge => edge.node)

  return (
    <Wrap>
      {postsData.map(item => {
        const { fields, frontmatter } = item
        const { title, date, tags, description } = frontmatter

        return (
          <PostCard key={fields.slug}>
            <Title>
              <Link to={fields.slug}>{title}</Link>
            </Title>
            <Desc>{description}</Desc>
            <Date>{date}</Date>
            <Tag>
              {tags && tags.length > 0 && tags.map(tag => (
                <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
              ))}
            </Tag>
          </PostCard>
        )
      })}
    </Wrap>
  )
}
