import styled from 'styled-components'

export const Input = styled.div`
  display: flex;
  margin-left: auto;
  padding: 10px;
  background: #f1f3f5;
  border: 1px solid;
  border-radius: 15px;
  background-color: transparent;
  align-items: center;
  color: #343a40;

  > img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  > input {
    width: 100px;
    font-size: 15px;
    border: none;
    background: transparent;
    transition: width 0.5s;

    &:focus {
      width: 200px;
    }
  }
`