import styled from 'styled-components'

export const Wrap = styled.div`
  float: left;
  width: 30%;
`

export const Tags = styled.ul` 
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;

  > li {
    width: 100%;

    & + li {
      margin-top: 15px;
    }

    span {
      font-size: 13px;
      color: #909090;
    }

    a {
      &.active {
        color: #845ef7;
      }
    }
  }
`