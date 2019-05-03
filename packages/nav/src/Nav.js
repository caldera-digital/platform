import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { media, CalderaDigitalThemeConsumer } from '@caldera-digital/theme'
import { Hamburger } from './Hamburger'

const createRoutes = () => {
  const routes = [
    {
      route: '/faq',
      text: 'FAQ',
    },
  ]

  routes.push({
    route: '/sign-up',
    text: 'Sign up/Login',
  })

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
    font-size: ${props => props.theme.defaultFontSize};
  `}
`

const StyledNavLink = styled.a`
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

export const NavComponent = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
  const routes = createRoutes()
  return (
    <NavContainer>
      <a to="/" onClick={() => setHamburgerOpen(false)} href="/">
        <div>logo here</div>
      </a>

      <NavOptionsContainer>
        <Hamburger
          open={hamburgerOpen}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        />
        <RoutesContainer open={hamburgerOpen}>
          {routes.map(({ route, text }) => (
            <StyledNavLink
              to={route}
              key={route}
              activeClassName="selected"
              onClick={() => setHamburgerOpen(false)}
            >
              {text}
            </StyledNavLink>
          ))}
        </RoutesContainer>
      </NavOptionsContainer>
    </NavContainer>
  )
}

export const Nav = () => (
  <CalderaDigitalThemeConsumer>
    {theme => (
      <ThemeProvider theme={theme}>
        <NavComponent />
      </ThemeProvider>
    )}
  </CalderaDigitalThemeConsumer>
)
