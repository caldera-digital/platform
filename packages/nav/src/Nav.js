import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'
import { Hamburger } from './Hamburger'

const NavContainer = styled.div`
  height: ${props => props.theme.desktopHeaderHeight};
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative;
  z-index: 100;

  ${media.forSmallOnly`
    height: ${props => props.theme.mobileHeaderHeight};
    padding: 0 1rem;
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

      &.selected {
        font-weight: bold;
      }

      &:after {
        display: none !important;
      }
  `}
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

const createRouteLink = as => styled(as)`
  ${NavLinkStyles};
`

export const NavComponent = ({
  routes = [],
  className = '',
  containerStyle = {},
  navOptionsStyle = {},
  navOptionsClassName = '',
  hamburgerStyle = {},
  routesContainerStyle = {},
  routesContainerClassName = '',
  renderLeftSection = () => null,
  hamburgerOpen: hamburgerOpenProp = false,
  onHamburgerClicked,
  hamburgerColor,
}) => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(hamburgerOpenProp)

  useEffect(() => {
    setHamburgerOpen(hamburgerOpenProp)
  }, [hamburgerOpenProp])

  return (
    <NavContainer className={className} style={containerStyle}>
      {renderLeftSection()}

      <NavOptionsContainer
        style={navOptionsStyle}
        className={navOptionsClassName}
      >
        <Hamburger
          open={hamburgerOpen}
          onClick={() =>
            onHamburgerClicked
              ? onHamburgerClicked(hamburgerOpen)
              : setHamburgerOpen(!hamburgerOpen)
          }
          hamburgerColor={hamburgerColor}
          style={hamburgerStyle}
        />
        <RoutesContainer
          open={hamburgerOpen}
          style={routesContainerStyle}
          className={routesContainerClassName}
        >
          {routes.map(item => {
            const {
              route,
              text,
              as = 'a',
              render,
              selected = false,
              renderLinkContent,
              onClick = () => null,
              className = '',
              ...rest
            } = item

            if (render) render(item)
            // The controls what the link renders as so it works with Reach, React Router, and normal
            const RouteLink = createRouteLink(as)

            return (
              <RouteLink
                to={route}
                key={route}
                className={`${className} ${selected ? 'selected' : ''}`}
                onClick={() => {
                  setHamburgerOpen(false)

                  onClick({ route, text, ...rest })
                }}
                {...rest}
              >
                {renderLinkContent ? renderLinkContent() : text}
              </RouteLink>
            )
          })}
        </RoutesContainer>
      </NavOptionsContainer>
    </NavContainer>
  )
}

export const Nav = props => <NavComponent {...props} />
