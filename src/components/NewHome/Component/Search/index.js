import React from 'react';

import withController from './Controller'

import { Input } from './styled'

const SEARCH = '../Images/search.svg'

const SearchComponent = ({
  query, hits, wrapRef,
  onChangeQuery,
}) => {
  return (
    <Input ref={wrapRef}>
      <img src={SEARCH} alt="search" />
      <input type="text" name="query" value={query} onChange={onChangeQuery.bind(null)} autoComplete="off" />
    </Input>
  )
}

export default withController(SearchComponent)
