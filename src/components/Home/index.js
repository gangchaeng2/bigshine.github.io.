import React from 'react'

import { Post, Tags } from './components'

import { Wrap } from './styled'

const HomeComponent = data => {
  return (
    <Wrap className='Clearfix'>
      <div style={{ border: '1px solid', height: '200px', marginBottom: '30px' }}></div>
      <Tags {...data} />
      <Post {...data} />
    </Wrap>
  )
}

export default HomeComponent
