import styled from 'styled-components'

export const Wrap = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 4px;
`

export const Li = styled.li`
  & + li {
    margin-top: 10px;
  }
`

export const HighLight = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;

  > em {
    background-color: #000;
    color: red;
  }
`