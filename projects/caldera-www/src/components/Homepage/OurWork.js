import React from 'react'
import { Link } from 'gatsby'
import { Section } from '../Section'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { jiggle } from '../../style/utils'

import ItsADatePhone from '../../assets/images/its-a-date-phone.png'
import PrideOfTheMeadowsWeb from '../../assets/images/pride-of-the-meadows-web.png'
import Blob from '../../assets/svgs/blue-blob2.svg'
import Blob3 from '../../assets/svgs/blue-blob3.svg'
import ArrowRight from '../../assets/svgs/arrow-right.svg'

const OurWorkSection = styled.div`
  position: relative;
  min-height: 600px;
`

const OurWorkContainer = styled(Container)`
  ${media.forSmallOnly`
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`

const OurWorkBlob = styled(Blob)`
  position: absolute;
  top: -50px;
  left: -250px;
  width: 500px;
  animation: 15s ${jiggle} infinite;

  ${media.forSmallMediumOnly`
    display: none;
  `}
`
const OurWorkBlob3 = styled(Blob3)`
  position: absolute;
  bottom: -50px;
  right: -250px;
  width: 500px;
  animation: 15s ${jiggle} infinite;

  ${media.forSmallMediumOnly`
    display: none;
  `}
`

const WORK_DETAIL_HEIGHT = '350px'
const WORK_OVERFLOW = '125px'
const IMAGE_HEIGHT = `${WORK_DETAIL_HEIGHT} + ${WORK_OVERFLOW}`
const OurWorkDetail = styled.div`
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

  > img {
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

    > img {
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

    > img {
      width: 60%;
    }
  `}

  @media (max-width: 400px) {
    > img {
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

export const OurWork = () => {
  return (
    <Section
      header="Our Work"
      sectionContainerStyle={{ overflow: 'hidden' }}
      renderSection={() => {
        return (
          <OurWorkSection>
            <OurWorkBlob />
            <OurWorkBlob3 />
            <OurWorkContainer>
              <OurWorkDetail>
                <img src={ItsADatePhone} alt="It's a Date app launch screen" />
                <div>
                  <h3>It's a Date</h3>
                  <p>
                    TODO: The swift transformation of the video-rental industry
                    (R.I.P brick-and-mortar movie rental companies) left a void
                    within the hearts of many gamers. As the market moved
                    towards digital entertainment streaming, the ability to rent
                    anything from new video games to childhood classics was
                    lost.
                  </p>
                </div>
                <OurWorkNavButton>
                  <Link to="/">
                    <ArrowRight />
                  </Link>
                </OurWorkNavButton>
              </OurWorkDetail>
              <OurWorkDetail reverse>
                <img
                  src={PrideOfTheMeadowsWeb}
                  alt="Pride of the Meadows landing page"
                />
                <div>
                  <h3>Pride of the Meadows </h3>
                  <p>
                    The swift transformation of the video-rental industry (R.I.P
                    brick-and-mortar movie rental companies) left a void within
                    the hearts of many gamers. As the market moved towards
                    digital entertainment streaming, the ability to rent
                    anything from new video games to childhood classics was
                    lost.
                  </p>
                </div>
                <OurWorkNavButton reverse>
                  <Link to="/" state={{ reverse: true }}>
                    <ArrowRight />
                  </Link>
                </OurWorkNavButton>
              </OurWorkDetail>
            </OurWorkContainer>
          </OurWorkSection>
        )
      }}
    />
  )
}
