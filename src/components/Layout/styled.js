import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans', 'Sans-serif'; 
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  .Clearfix {
    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`
