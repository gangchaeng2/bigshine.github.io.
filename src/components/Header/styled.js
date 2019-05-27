import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrap = styled.div`
  padding: 0 20px;
  height: 80px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`

export const A = styled(Link)`
  float: left;
  line-height: 80px;
  font-size: 20px;
  color: #000;
`

export const Ul = styled.ul`
  float: right;
  line-height: 80px;

  > li {
    float: left;

    & + li {
      margin-left: 10px;
    }
  }
`