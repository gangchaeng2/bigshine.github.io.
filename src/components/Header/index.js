import React from 'react'

import { Wrap, A, Ul } from './styled'

const Header = ({ title, description, }) => {
  return (
    <Wrap>
      <A to="/">Bigshine</A>

      <Ul className='Clearfix'>
        <li>소개</li>
        <li>About</li>
        <li>About</li>
      </Ul>
    </Wrap>
  )
}

export default Header
