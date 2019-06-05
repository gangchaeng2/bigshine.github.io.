import React from 'react'

import List from './Component/List'

import { Wrap, Section } from './styled'

const PostComponent = () => {
  return (
    <Wrap>
      <Section>
        <h2>최근 포스트</h2>
      </Section>

      <List />
    </Wrap>
  )
}

export default PostComponent
