import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'
import { Loading } from '@caldera-digital/core'
import { Link } from 'gatsby'

const ButtonStyles = css`
  cursor: pointer;
  position: relative;
  background-color: ${props => props.theme.secondaryColor};
  border: none;
  border-radius: 40px;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.headerFont};
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  transition: ${props => props.theme.defaultTransition};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.white};
  min-width: 240px;
  min-height: 48px;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.hoveredSecondaryColor};
    color: ${props => props.theme.white};
  }

  &:active {
    background-color: ${props => props.theme.pressedSecondaryColor};
    color: ${props => props.theme.white};
  }

  &:visited {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.white};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  ${media.forSmallMediumOnly`
    font-size: 1rem;
    padding: .75rem 1.75rem;
  `}
`

const createButtonStyle = as => styled(as)`
  ${ButtonStyles};
`

export const Button = ({
  loading = false,
  size = 'large',
  children,
  ...rest
}) => {
  const Button = createButtonStyle('button')
  return (
    <Button size={size} {...rest}>
      {loading ? <Loading size={size} /> : children}
    </Button>
  )
}

export const LinkButton = ({ to, children, buttonProps = {} }) => {
  const LinkButton = createButtonStyle(Link)
  return (
    <LinkButton {...buttonProps} as={Link} to={to}>
      {children}
    </LinkButton>
  )
}
