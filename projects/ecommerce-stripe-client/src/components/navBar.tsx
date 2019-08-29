import { Nav } from '@caldera-digital/nav'
import { media } from '@caldera-digital/theme'
import React, { FC, useContext } from 'react'
import { Link, RouteProps, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import styled, { withTheme } from 'styled-components'

import { AuthContext } from '../context/AuthContext'
import { APP_NAME } from '../utils/const'

type RouteConfig = {
  pathname: string
  logout?: () => void
  theme: any
}

type NavProps = RouteProps & {
  theme: any
}

const StyledNav = styled(Nav)`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 6px 18px 0px rgba(0, 128, 238, 0.15);

  a {
    margin-right: 1.25rem;
    color: ${props => props.theme.defaultFontColor} !important;
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

export const createRoutes = ({ pathname, logout, theme }: RouteConfig) => [
  {
    route: '/',
    text: 'Home',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === pathname
    },
  },
  {
    route: '/cart',
    text: 'Cart',
    as: Link,
    style: routeStyles,
    get selected() {
      return this.route === pathname
    },
  },
  ...(logout
    ? [
        {
          route: '',
          onClick: logout,
          text: 'Logout',
          as: 'button',
          style: {
            ...routeStyles,
            borderRadius: '5px',
            background: theme.primaryColor,
            border: 'none',
            padding: '.5rem',
            margin: 0,
          },
          get selected() {
            return this.route === pathname
          },
        },
      ]
    : []),
]

const NavBarComponent: FC<NavProps> = ({ location, theme }) => {
  const { logout } = useContext(AuthContext)

  return (
    <StyledNav
      routes={createRoutes({
        pathname: location && location.pathname ? location.pathname : '',
        logout,
        theme,
      })}
      hamburgerColor={theme.primaryColor}
      renderLeftSection={() => (
        <div style={{ color: theme.primaryColor }}>{APP_NAME}</div>
      )}
    />
  )
}

export const NavBar = compose<NavProps, {}>(
  withTheme,
  withRouter,
)(NavBarComponent)
