import React from 'react'
import { } from 'prop-types'

import { Wrap, A, Ul } from './styled'

const Header = ({ title, description, }) => {
  return (
    <Wrap>
      <A href="/">Bigshine</A>

      <Ul className='Clearfix'>
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </Ul>
    </Wrap>
  )
}

export default Header
