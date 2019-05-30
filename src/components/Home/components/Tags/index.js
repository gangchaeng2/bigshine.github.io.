import React from 'react'
import { isEmpty } from 'lodash'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap, Tags } from './styled'

const TagComponent = data => {
  const { tag } = data
  const { allMarkdownRemark: { group } } = useStaticQuery(
    graphql`
      query TagQuery {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  return (
    <Wrap>
      <section>태그</section>
      <Tags>
        <li>
          <Link to="/" activeClassName={isEmpty(tag) ? 'active' : ''}>전체보기</Link>
        </li>
        {group.map(item => (
          <li key={item.fieldValue}>
            <Link to={`/tags/${item.fieldValue}`} activeClassName={item.fieldValue === tag ? 'active' : ''}>{item.fieldValue} <span>({item.totalCount})</span></Link>
          </li>
        ))}
      </Tags>
    </Wrap>
  )
}

export default TagComponent
