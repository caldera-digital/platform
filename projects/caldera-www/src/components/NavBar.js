import React from 'react'
import { Nav } from '@caldera-digital/nav'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import Logo from '../assets/svgs/caldera-logo.svg'

const LOGO_SPACING = '28px'
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

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

    a {
      margin: 0;
      font-size: 1.25rem
    }
  `}
`

const routeStyles = {
  textTransform: 'uppercase',
}

export const createRoutes = (location = {}) => [
  {
    route: '/our-process',
    text: 'Our Process',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/our-work',
    text: 'Our Work',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/join-our-team',
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
  {
    route: '/blog',
    text: 'Blog',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === location.pathname
    },
  },
]

export const NavBar = ({ location, theme }) => {
  return (
    <StyledNav
      routes={createRoutes(location)}
      hamburgerColor={theme.primaryColor}
      renderLeftSection={() => (
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      )}
    />
  )
}
