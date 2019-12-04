import React from 'react'
import { Link } from 'gatsby'
import { isEmpty } from 'lodash'

import { Wrap, Li, HighLight } from './styled'

export default ({
  query, hits,
}) => {
  console.log(hits)

  if (!isEmpty(query)) {
    return (
      <Wrap>
        <ul>
          {hits && hits.length > 0 ? hits.map(hit => (
            <Li key={hit.objectID}>
              <Link to={`${hit.fields.slug}`}>
                <HighLight dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
                {hit._highlightResult.tags.length > 0 && hit._highlightResult.tags.map(tag => (
                  <HighLight key={tag.value} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: tag.value }} />
                ))}
              </Link>
            </Li>
          )) : (
            <div>검색결과가 없습니다.</div>
          )}
        </ul>
      </Wrap>
    )

  } else {
    return null
  }
  
}
