import React from 'react'

import Card from '../Card'

import { Wrap } from './styled'

const ListComponent = ({
  postsData,
}) => {
  return (
    <Wrap>
      {postsData.map(item => (
        <Card key={item.fields.slug} {...item} />
      ))}
    </Wrap>
  )
}

export default ListComponent
