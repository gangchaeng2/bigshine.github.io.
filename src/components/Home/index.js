import React from 'react'

import { Post, Tags } from './components'

import { Wrap } from './styled'

const HomeComponent = data => {
  return (
    <Wrap className='Clearfix'>
      <Tags {...data} />
      <Post {...data} />
    </Wrap>
  )
}

export default HomeComponent
