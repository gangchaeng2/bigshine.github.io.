import React from 'react'

import { Post, Tags } from './components'

import { Wrap } from './styled'

const HomeComponent = () => {
  return (
    <Wrap className='Clearfix'>
      <Tags />
      <Post />
    </Wrap>
  )
}

export default HomeComponent
