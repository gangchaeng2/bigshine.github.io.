import React from 'react'
import { Link } from 'gatsby'

import withConnector from './Controller'

import { Wrap, Result } from './styled'

const SearchComponent = ({ 
  query, hits, wrapRef,
  onChangeQuery,
}) => {
  return (
    <Wrap ref={wrapRef}>
      <input type="text" name="query" value={query} onChange={onChangeQuery.bind(null)} />
      <Result>
        {hits && hits.map(hit => (
          <Link key={hit.title} to={hit.fields.slug}>{hit.title}</Link>
        ))}
      </Result>
    </Wrap>
  )
}

export default withConnector(SearchComponent)
