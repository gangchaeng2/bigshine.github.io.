import styled from 'styled-components'

export const Wrap = styled.div`
  position: fixed;
  display: flex;
  width: 250px;
  height: 100%;
  flex-direction: column;
  background: #fff;
  top: 0;
  left: 0;
  box-shadow: -6px 0 12px 0 #d6dee4;
`

export const Section = styled.div`
  > h2 {
    display: block;
    float: right;
    margin: 25px 40px 25px;
    font-size: 20px;
    color: #212529;
    font-weight: bold;
  }
`

export const Ul = styled.ul`
  > li {
    padding: 15px 4px 15px 15px;

    > a {
      display: inline-block;
      width: 100%;
      height: 30px;
      line-height: 30px;

      &.active {
        font-weight: 700;
        border-right: 4px solid;
      }
    }
  }
`