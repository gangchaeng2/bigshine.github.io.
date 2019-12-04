import React from 'react'

import { Menu, Header, Post } from './Component'

import {
  Wrap,
} from './styled'

const HomeComponent = () => {
  return (
    <Wrap>
      <Menu />
      <Header />
      <Post />
    </Wrap>
  )
}

export default HomeComponent
