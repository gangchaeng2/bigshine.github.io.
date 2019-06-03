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
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  &:hover {
    > a {
      color: #845ef7;
    }
    text-decoration: underline;
  }
`

export const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`

export const Date = styled.p`
  font-size: 12px;
`

export const Tag = styled.div`
  margin-top: 10px;

  > a {
    float: left;
    padding: 5px;
    font-size: 10px;
    background-color: #ddd;

    &:hover {
      background-color: rgba(221, 221, 221, 0.8)
    }

    & + a {
      margin-left: 5px;
    }
  }
`
