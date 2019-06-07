import React from 'react'
import { Link } from 'gatsby'

import { SelectImg } from 'utils/image.js'

import { Card, Header, Date, MainCircle, Tag } from './styled'

const CardComponent = ({
  fields, html, frontmatter,
}) => {
  const { title, date, tags } = frontmatter

  return (
    <Card>
      <MainCircle>
        {SelectImg('js')}
      </MainCircle>
      <Header>{title}</Header>
      <Date>{date}</Date>
      <Tag>
        {tags && tags.length > 0 && tags.map(tag => (
          <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
        ))}
      </Tag>
    </Card>
  )
}

export default CardComponent