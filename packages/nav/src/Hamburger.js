import React from 'react'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

const Hb1 = styled.div``
const Hb2 = styled.div``
const Hb3 = styled.div``

const HamburgerWrapper = styled.div`
  box-sizing: initial;
  left: 0;
  top: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  padding: 3px;
  text-align: center;
  cursor: pointer;
  transition: opacity 250ms ease;
  display: none;

  ${media.forSmallOnly`
    display: block;
  `};

  > div {
    position: relative;
    background-color: ${props => props.hamburgerColor || props.theme.white};
    width: 20px;
    height: 3px;
    border-width: 1px 0;
    margin: 0 auto 3px;
    padding: 0;
    border-radius: 1px;
    font-size: 1px;
    transition: all 200ms ease;
    transform-origin: 0 0;

    &:last-child {
      margin: 0;
    }
  }

  &[open] {
    ${Hb1} {
      transform: translate(4px, -1px) rotate(45deg);
    }

    ${Hb2} {
      opacity: 0;
    }

    ${Hb3} {
      transform: translate(2px, 1px) rotate(-45deg);
    }
  }
`

export const Hamburger = props => (
  <HamburgerWrapper open={props.open} {...props}>
    <Hb1 />
    <Hb2 />
    <Hb3 />
  </HamburgerWrapper>
)
