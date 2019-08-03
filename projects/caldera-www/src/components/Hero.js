import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'
import { jiggle } from '../style/utils'

import Blob5 from '../assets/svgs/blue-blob5.svg'
// import Blob3 from '../assets/svgs/blue-blob3.svg'
// import Blob4 from '../assets/svgs/blue-blob4.svg'

const HeroBlob5 = styled(Blob5)``
// const HeroBlob3 = styled(Blob3)``
// const HeroBlob4 = styled(Blob4)``

const HeroTextContainer = styled.div`
  ${media.forSmallMediumOnly`
    padding: 2rem 3rem 0;
  `}

  ${media.forSmallOnly`
    padding: 2rem 2rem 1rem;
  `}
`

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  margin-bottom: 3rem;
  overflow: hidden;

  ${HeroTextContainer} {
    width: 50%;
    padding-right: 3rem;

    h1 {
      font-size: 70px;
      font-weight: bold;
    }
  }

  img {
    object-fit: contain;
    max-width: 550px;
    text-align: center;
  }

  ${HeroBlob5} {
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

    ${HeroTextContainer} {
      width: 100%;

      h1 {
        font-size: 50px;
      }
    }

    img {
      max-width: 45%;
    }
  `}

  ${media.forSmallOnly`
    justify-content: flex-start;

    ${HeroTextContainer} {
      h1 {
        font-size: 40px;
        margin: 0;
      }
    }

    img {
      display: none;
    }

    ${HeroBlob5} {
      width: 120%;
      top: 0;
      right: -10%;
      z-index: -1;
      animation: 15s ${jiggle} infinite;
    }
  `}

  ${({ secondary }) =>
    secondary &&
    css`
      margin-bottom: 0;

      ${HeroTextContainer} {
        width: 40%;
      }

      img {
        max-width: 60%;
      }

      ${media.forSmallMediumOnly`
        ${HeroTextContainer} {
          width: 100%;

          h1 {
            font-size: 50px;
          }
        }

        img {
          max-width: 65%;
          margin-top: 5rem;
        }
      `}

      ${media.forSmallOnly`
        ${HeroTextContainer} {
          h1 {
            font-size: 35px;
          }
        }

        img {
          margin: 0 0 3rem 0;
          display: block;
          max-width: 85%;
        }
      `}
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

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 1.5rem;

      ${media.forSmallMediumOnly`
        font-size: 1.25rem;
      `}

      ${media.forSmallOnly`
        font-size: 1rem;
      `}
    `}
`

export const Hero = ({
  title,
  secondaryText,
  secondary = false,
  heroImgConfig,
}) => {
  return (
    <HeroContainer secondary={secondary}>
      <HeroBlob5 />
      <HeroTextContainer>
        <h1>{title}</h1>
        <SecondaryText secondary={secondary}>{secondaryText}</SecondaryText>
      </HeroTextContainer>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {heroImgConfig && <img {...heroImgConfig} />}
    </HeroContainer>
  )
}
