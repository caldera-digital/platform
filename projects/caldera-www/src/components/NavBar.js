import React from 'react'
import { Nav } from '@caldera-digital/nav'
// import { Location } from '@reach/router'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import Logo from '../assets/svgs/caldera-logo.svg'

const LOGO_SPACING = '28px'
const LogoContainer = styled(Link)`
  svg {
    height: calc(${props => props.theme.desktopHeaderHeight} - ${LOGO_SPACING});

    ${media.forSmallOnly`
      height: calc(${props =>
        props.theme.mobileHeaderHeight} - ${LOGO_SPACING});
    `};
  }
`

const StyledNav = styled(Nav)`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 6px 18px 0px rgba(0, 128, 238, 0.15);

  a {
    margin-right: 1.25rem;
    color: #676767 !important;
    font-weight: 400;
    text-transform: initial !important;

    &:after {
      background-color: ${props => props.theme.secondaryColor} !important;
    }
  }

  ${media.forSmallMediumOnly`
    a {
      margin-right: 0.8rem;
    }
  `}

  ${media.forSmallOnly`
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
  `}
`

const routeStyles = {
  textTransform: 'uppercase',
}

const createRoutes = location => [
  {
    route: '/who-we-are',
    text: 'Who We Are',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/products',
    text: 'Our Products',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/careers',
    text: 'Join Our Team',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/contact-us',
    text: 'Contact Us',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
]

export const NavBar = ({ location }) => {
  return (
    <StyledNav
      routes={createRoutes(location)}
      renderLeftSection={() => (
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      )}
    />
  )
}
