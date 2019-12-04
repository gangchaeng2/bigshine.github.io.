import React from 'react'
import { Link } from 'gatsby'
import htmlToText from 'html-to-text'

import { SelectImg } from 'utils/image.js'

import { Card, Title, Date, MainCircle, Tag, MainText } from './styled'

const CardComponent = ({
  fields, html, frontmatter,
}) => {
  const { title, date, tags } = frontmatter
  const mainTxt = htmlToText.fromString(html).length > 100 ? htmlToText.fromString(html).substring(0, 100) + '...' : htmlToText.fromString(html)

  return (
    <Card>
      <MainCircle>
        {SelectImg('js')}
      </MainCircle>
      <Title to={`${fields.slug}`}>{title}</Title>
      <Date>{date}</Date>
      <MainText>{mainTxt}</MainText>
      <Tag>
        {tags && tags.length > 0 && tags.map(tag => (
          <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
        ))}
      </Tag>
    </Card>
  )
}

export default CardComponent