import React from 'react'

import GlobalStyle from './src/utils/globalStyle.js'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <GlobalStyle />
    </>
  )
}
