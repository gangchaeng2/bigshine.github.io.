import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans', 'Sans-serif'; 
    box-sizing: border-box;
  }
`
