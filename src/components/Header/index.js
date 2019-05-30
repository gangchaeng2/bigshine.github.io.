import React from 'react'
import { Link } from 'gatsby'

import { Wrap, A, Ul } from './styled'

const Header = () => {
  return (
    <Wrap>
      <A to="/">Bigshine</A>

      {/* <Ul className='Clearfix'>
        <li><Link to='/intro'>소개</Link></li>
        <li><Link to='/dev'>Dev</Link></li>
      </Ul> */}
    </Wrap>
  )
}

export default Header
