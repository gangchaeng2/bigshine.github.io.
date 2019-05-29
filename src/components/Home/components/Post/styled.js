import styled from 'styled-components'

export const Wrap = styled.div`
  float: right;
  width: 60%;
  padding-left: 10px;

  > div {
    & + div {
      margin-top: 10px;
    }
  }
`