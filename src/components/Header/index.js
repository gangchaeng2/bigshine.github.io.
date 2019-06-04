import React from 'react'

import Search from '../Search'

import { Wrap, A } from './styled'

const Header = () => {
  return (
    <Wrap>
      <A to="/">Bigshine</A>
      <Search />
    </Wrap>
  )
}

export default Header
