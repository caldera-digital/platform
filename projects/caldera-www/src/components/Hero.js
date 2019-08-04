import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'
import { COMMON_BLOB_STYLES, BlobHandler } from './Blob'

import Blob5 from '../assets/svgs/blue-blob5.svg'

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
  `}

  ${({ secondary, caseStudy }) =>
    (secondary || caseStudy) &&
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

    ${COMMON_BLOB_STYLES}
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

const CompanyName = styled.p`
  margin-top: 2rem;
  font-size: 60px;
  border-bottom: 6px solid ${props => props.theme.secondaryColor};
  display: inline-block;

  ${media.forSmallMediumOnly`
    font-size: 2rem;
  `}

  ${media.forSmallOnly`
    font-size: 1.5rem;
  `}
`

export const Hero = ({
  title,
  secondaryText,
  secondary = false,
  caseStudy = false,
  heroImgConfig,
  companyName,
  blobs = [{ blob: Blob5, position: 'topRight', size: 'medium' }],
}) => {
  return (
    <HeroContainer secondary={secondary} caseStudy={caseStudy}>
      <BlobHandler blobs={blobs} />
      <HeroTextContainer>
        <h1>{title}</h1>
        {secondaryText && (
          <SecondaryText secondary={secondary}>{secondaryText}</SecondaryText>
        )}
        {companyName && <CompanyName>{companyName}</CompanyName>}
      </HeroTextContainer>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {heroImgConfig && <img {...heroImgConfig} />}
    </HeroContainer>
  )
}
