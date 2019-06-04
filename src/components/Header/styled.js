import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  height: 80px;
  align-items: center;
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

    > a {
      display: inline-block;

      &:hover {
        font-weight: 700;
      }
    }
  }
`
