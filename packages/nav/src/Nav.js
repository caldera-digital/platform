import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent } from '../assets/throneLogo.svg'
import { NavLink } from 'react-router-dom'
import { media } from '../style'
import { Hamburger } from './'
import { AuthConsumer } from '../context'
import { LOCK_MODE } from '../utils/const'

// We don't technically have a route for sign out, it calls a method instead
// once logged out, the use is redirected to the home screen
const SIGN_OUT_ROUTE_KEY = '/sign-out'

const createRoutes = (isSignedIn = false) => {
  let routes = [
    {
      route: '/faq',
      text: 'FAQ',
    },
  ]

  if (LOCK_MODE) {
    routes.push({
      route: '/donate',
      text: 'Donate',
    })
    routes.push({
      route: '/analytics',
      text: 'Analytics',
    })
  }

  if (isSignedIn) {
    if (!LOCK_MODE) {
      routes.push({
        route: '/create-group',
        text: 'Create Group',
      })
    }

    routes.push({
      route: SIGN_OUT_ROUTE_KEY,
      text: 'Sign Out',
    })
  } else {
    routes.push({
      route: '/sign-up',
      text: 'Sign up/Login',
    })
  }

  return routes
}

const NavContainer = styled.div`
  height: ${props => props.theme.desktopHeaderHeight};
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  svg {
    width: 250px;
    fill: white;
  }

  ${media.forSmallOnly`
    height: ${props => props.theme.mobileHeaderHeight};
    padding: 0 1rem;

    svg {
      width: 175px;
    }
  `}
`

const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavLinkStyles = css`
  color: ${props => props.theme.white} !important;
  text-decoration: none;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  /* &:before, */
  &:after {
    content: '';
    position: absolute;
    bottom: -7px;
    width: 0px;
    height: 3px;
    margin: 5px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    left: 0;
  }

  &:hover {
    &:after {
      opacity: 1;
      background-color: ${props => props.theme.white};
      width: 100%;
    }
  }

  &.selected {
    &:after {
      opacity: 1;
      background-color: ${props => props.theme.white};
      width: 100%;
    }
  }

  ${media.forSmallOnly`
    color: ${props => props.theme.defaultFontColor} !important;
    margin-bottom: 0.25rem;
    padding: .75rem;
    margin: 0;
    font-size: ${props => props.theme.defaultFontSize}
  `}
`

const StyledNavLink = styled(NavLink)`
  ${NavLinkStyles}
`

const LogoutButton = styled.div`
  ${NavLinkStyles}
`

const RoutesContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.forSmallOnly`
    position: absolute;
    height: calc(100vh - ${({ theme }) => theme.mobileHeaderHeight});
    top: ${({ theme }) => theme.mobileHeaderHeight};
    left: 0;
    background-color: ${({ theme }) => theme.white};
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem;
    z-index: 20;
  `}
`

export const NavComponent = ({ isSignedIn, logout }) => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
  const routes = createRoutes(isSignedIn, logout)
  return (
    <NavContainer>
      <NavLink to="/" onClick={() => setHamburgerOpen(false)}>
        <ReactComponent />
      </NavLink>

      <NavOptionsContainer>
        <Hamburger
          open={hamburgerOpen}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        />
        <RoutesContainer open={hamburgerOpen}>
          {routes.map(({ route, text }) =>
            route === SIGN_OUT_ROUTE_KEY ? (
              <LogoutButton
                key={route}
                onClick={() => {
                  setHamburgerOpen(false)
                  logout()
                }}
              >
                {text}
              </LogoutButton>
            ) : (
              <StyledNavLink
                to={route}
                key={route}
                activeClassName="selected"
                onClick={() => setHamburgerOpen(false)}
              >
                {text}
              </StyledNavLink>
            )
          )}
        </RoutesContainer>
      </NavOptionsContainer>
    </NavContainer>
  )
}

// Pass everything from auth context down
export const Nav = props => {
  return (
    <AuthConsumer>
      {authContext => <NavComponent {...props} {...authContext} />}
    </AuthConsumer>
  )
}
