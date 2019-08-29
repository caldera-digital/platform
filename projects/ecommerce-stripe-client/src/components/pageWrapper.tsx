import { Container } from '@caldera-digital/theme'
import React, { FC } from 'react'

import { NavBar } from './navBar'

type P = {
  showNav?: boolean
  fluid?: false
}

export const PageWrapper: FC<P> = ({
  children,
  showNav = true,
  fluid = false,
}) => {
  return (
    <div>
      {showNav && <NavBar />}

      <Container fluid={fluid} style={{ paddingTop: '3rem' }}>
        {children}
      </Container>
    </div>
  )
}
