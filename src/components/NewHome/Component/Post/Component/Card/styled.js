import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex: 1 1;
  width: calc(33.333% - 10px);
  flex-direction: column;
  margin: 5px;
  padding: 30px 10px;
  background: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,.05);
  border-radius: 4px;
`

export const MainCircle = styled.div`
  position: absolute;
  top: -20px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;

  svg {
    margin: 5px;
    width: 30px;
    height: 30px;
  }
`

export const Header = styled.p`
  font-size: 18px;
  font-weight: 700;
`

export const Date = styled.p`
  margin-top: 15px;
  color: gray;
  font-size: 12px;
`

export const Tag = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;

  > a {
    float: left;
    padding: 5px;
    font-size: 10px;
    background-color: #ddd;
    border-radius: 3px;

    &:hover {
      background-color: rgba(221, 221, 221, 0.8);
    }

    & + a {
      margin-left: 10px;
    }
  }
`