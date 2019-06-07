import React from 'react'
import { Link } from 'gatsby'

import { 
  Wrap, Section, Ul,
} from './styled'

const MenuComponent = () => {
  const { location } = window

  return (
    <Wrap>
      <Section>
        <h2>
          <Link to="/">Bigshine</Link>
        </h2>
      </Section>

      <Section>
        <Ul>
          <li>
            <Link to="/" activeClassName={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </Ul>
      </Section>
    </Wrap>
  )
}

export default MenuComponent
