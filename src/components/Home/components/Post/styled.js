import styled from 'styled-components'

export const Wrap = styled.ul`
  float: right;
  width: 60%;
  padding-left: 10px;

  > li {
    padding: 10px;
    & + li {
      margin-top: 20px;
    }
  }
`

export const Title = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`