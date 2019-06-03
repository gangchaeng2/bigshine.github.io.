import React from 'react'

import withController from './Controller'

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default withController(Layout)
