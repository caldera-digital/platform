import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from '@caldera-digital/theme'

import ArrowRight from '../assets/svgs/arrow-right.svg'

const WORK_DETAIL_HEIGHT = '350px'
const WORK_OVERFLOW = '125px'
const IMAGE_HEIGHT = `${WORK_DETAIL_HEIGHT} + ${WORK_OVERFLOW}`
const StyledImageLinkSection = styled.div`
  background-color: rgba(0, 128, 238, 0.07);
  height: ${WORK_DETAIL_HEIGHT};
  border-radius: 30px;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  margin: ${`calc(${WORK_OVERFLOW} / 2 + 3rem) 0`};
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};

  h3 {
    font-weight: bold;
    color: ${props => props.theme.black};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  img {
    width: 40%;
    height: ${`calc(${IMAGE_HEIGHT})`};
    object-fit: contain;
    position: relative;
  }

  > div {
    width: 60%;
  }

  ${media.forSmallMediumOnly`
    flex-direction: column;
    height: auto;
    position: relative;
    padding-top: ${`calc((${IMAGE_HEIGHT}) / 2)`};
    margin-top: ${`calc((${IMAGE_HEIGHT}) / 2)`};

    img {
      position: absolute;
      /* Note the - for negative */
      top: ${`calc((${IMAGE_HEIGHT}) / -2)`};
      width: 40%;
    }

    > div {
      width: 100%;
    }
  `}

  ${media.forSmallOnly`
    border-radius: ${props =>
      props.reverse ? '30px 0 0 30px' : '0 30px 30px 0'};
    margin-left: ${props => (props.reverse ? '3rem' : '0')};
    margin-right: ${props => (props.reverse ? '0' : '3rem')};

    img {
      width: 60%;
    }
  `}

  @media (max-width: 400px) {
    img {
      width: 80%;
    }
  }
`

const OUR_WORK_NAV_BUTTON_SIZE = '55px'
const OurWorkNavButton = styled.span`
  display: none;

  svg {
    width: ${OUR_WORK_NAV_BUTTON_SIZE};
    height: ${OUR_WORK_NAV_BUTTON_SIZE};
  }

  ${media.forSmallMediumOnly`
    display: block;
    position: absolute;
    /* Note the - for negative */
    bottom: ${`calc(${OUR_WORK_NAV_BUTTON_SIZE} / -2)`};
    right: ${props =>
      props.reverse
        ? `calc(100% + (${OUR_WORK_NAV_BUTTON_SIZE} / -2))`
        : `calc(${OUR_WORK_NAV_BUTTON_SIZE} / -2)`};
  `}
`

export const ImageLinkSection = ({
  imageConfig,
  title,
  description,
  to,
  reverse,
  className = '',
}) => {
  return (
    <StyledImageLinkSection reverse={reverse} className={className}>
      {imageConfig && (
        <Link to={to}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...imageConfig} />
        </Link>
      )}
      <div>
        <h3>
          <Link to={to}>{title}</Link>
        </h3>
        {/* May need to check if function eventually */}
        {description()}
      </div>
      <OurWorkNavButton reverse={reverse}>
        <Link to={to}>
          <ArrowRight />
        </Link>
      </OurWorkNavButton>
    </StyledImageLinkSection>
  )
}
