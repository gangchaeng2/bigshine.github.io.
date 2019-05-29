import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
`

export const A = styled(Link)`
  float: left;
  line-height: 80px;
  font-weight: 700;
  font-size: 20px;
  color: #000;
`

export const Ul = styled.ul`
  float: right;
  line-height: 80px;

  > li {
    float: left;
    cursor: pointer;

    & + li {
      margin-left: 15px;
    }

    &:hover {
      font-weight: 700;
    }

    > a {
      display: inline-block;
    }
  }
`
