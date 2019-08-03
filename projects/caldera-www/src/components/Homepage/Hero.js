import React from 'react'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import { jiggle } from '../../style/utils'

import HeroBlob from '../../assets/svgs/blue-blob5.svg'
import Phone from '../../assets/images/homeHeroImage.png'

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  margin-bottom: 3rem;
  overflow: hidden;

  & > * {
    flex: 1;

    h1 {
      font-size: 70px;
      font-weight: bold;
      margin-right: 2rem;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
    max-width: 500px;
  }

  .backgroundHeroBlob {
    position: absolute;
    width: 70%;
    top: -25%;
    right: -10%;
    z-index: -1;
    animation: 15s ${jiggle} infinite;
  }

  ${media.forSmallMediumOnly`
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0;

    & > * {
      h1 {
        font-size: 50px;
      }
    }

    img {
      max-width: 35%;
    }
  `}

  ${media.forSmallOnly`
  justify-content: flex-start;

    & > * {
      flex: 0;

      h1 {
        font-size: 40px;
        margin: 0;
      }
    }

    img {
      max-width: 60%;
      display: none;
    }

    .backgroundHeroBlob {
      width: 120%;
      top: 0;
      right: -10%;
      z-index: -1;
      animation: 15s ${jiggle} infinite;
    }
  `}
`

const HeroTextContainer = styled.div`
  ${media.forSmallMediumOnly`
    padding: 2rem 3rem 0;
  `}

  ${media.forSmallOnly`
    padding: 2rem 2rem 0;
  `}
`

const SecondaryText = styled.p`
  margin-top: 2rem;
  font-size: 2.5rem;
  color: ${props => props.theme.grayText};

  ${media.forSmallMediumOnly`
    font-size: 1.75rem;
  `}

  ${media.forSmallOnly`
    font-size: 1.5rem;
  `}
`

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroBlob className="backgroundHeroBlob" />
      <HeroTextContainer>
        <h1>We create outstanding experiences for B2B companies</h1>
        <SecondaryText>Web | Mobile | Analytics</SecondaryText>
      </HeroTextContainer>

      <img src={Phone} alt="fancy phone graphic" />
    </HeroContainer>
  )
}
