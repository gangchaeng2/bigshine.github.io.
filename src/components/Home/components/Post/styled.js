import styled from 'styled-components'

export const Wrap = styled.ul`
  float: right;
  width: 60%;
  padding-left: 10px;
`

export const PostCard = styled.li`
  padding: 10px;

  & + li {
    margin-top: 30px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 10px;

  &:hover {
    > a {
      color: #845ef7;
    }
    text-decoration: underline;
  }
`
