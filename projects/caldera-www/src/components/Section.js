import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { jiggle } from '../style/utils'
import BlueArrow from '../assets/svgs/blue-arrow.svg'
import { BlobHandler, COMMON_BLOB_STYLES } from './Blob'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'

const FancyContainer = styled(Container)`
  ${({ twoColumn }) =>
    twoColumn &&
    css`
      display: flex;

      ${Section.Column} {
        &:first-child {
          width: 40%;
          padding-right: 2rem;
        }

        &:last-child {
          width: 60%;
        }
      }

      ${media.forSmallMediumOnly`
        flex-direction: column;

        ${Section.Column} {
          &:first-child {
            width: 70%;
            padding-right: 0;
          }

          &:last-child {
            width: 100%;
          }
        }
      `}

      ${media.forSmallOnly`

        ${Section.Column} {
          &:first-child {
            width: 100%;
          }

          &:last-child {
            width: 100%;
          }
        }
      `}
    `}
`

const SectionContainer = styled.section`
  padding: ${props =>
    props.smallPadding ? '2rem 0' : props.noPadding ? '0' : '5rem 0 4rem'};
  position: relative;
  background-color: ${props => {
    if (props.lightBackground) {
      return props.theme.lightBackgroundColor
    }
    if (props.backgroundColor) {
      return props.backgroundColor
    }

    return 'transparent'
  }};
  min-height: ${props => (props.bottomBackgroundImage ? '800px' : 'auto')};

  ${media.forSmallMediumOnly`
    padding: ${props =>
      props.smallPadding ? '1.5rem 0' : props.noPadding ? '0' : '4rem 0 3rem'};
    min-height: auto !important;
  `}

  ${media.forSmallOnly`
    padding: ${props =>
      props.smallPadding ? '1.25rem 0' : props.noPadding ? '0' : '3rem 0'};
  `}

  ${COMMON_BLOB_STYLES}
`

const BottomBackgroundImage = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 400px;
  opacity: 0.55;
  z-index: -1;
  background-size: cover;
  background-image: url(${props => props.bottomBackgroundImage});
  background-repeat: no-repeat;

  ${media.forSmallOnly`
    display: none;
  `}
`

const BlobContainer = styled.div`
  position: relative;
  width: 45%;

  svg {
    width: 130%;
    position: absolute;
    left: -40%;
    bottom: -25%;
    animation: 15s ${jiggle} infinite;
  }
`

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
  padding: 0 1rem;

  ${media.forSmallMediumOnly`
    font-size: 2.75rem;
    margin-bottom: 3rem;
  `}

  ${media.forSmallOnly`
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  `}
`

const LightBackgroundMiddleBar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 500px;
  background-color: ${props => props.theme.lightBackgroundColor};
  width: 100%;

  ${media.forSmallMediumOnly`
    height: 400px;
  `}

  ${media.forSmallOnly`
    height: 300px;
  `}
`

export const Section = ({
  children,
  fluid = false,
  blob: Blob,
  blobs,
  smallPadding = false,
  noPadding = false,
  lightBackground = false,
  lightBackgroundMiddleBar = false,
  backgroundColor,
  bottomBackgroundImage,
  renderSection,
  sectionContainerStyle = {},
  contentContainerStyle = {},
  sectionContainerClassName = '',
  twoColumn = false,
  renderColumnOne = () => null,
  renderColumnTwo = () => null,
  header,
  // This is needed for styled components when we style the section component
  className,
}) => {
  return (
    <SectionContainer
      backgroundColor={backgroundColor}
      lightBackground={lightBackground}
      bottomBackgroundImage={bottomBackgroundImage}
      style={sectionContainerStyle}
      sectionContainerClassName={sectionContainerClassName}
      smallPadding={smallPadding}
      noPadding={noPadding}
    >
      {lightBackgroundMiddleBar && <LightBackgroundMiddleBar />}
      {blobs && <BlobHandler blobs={blobs} />}
      {header && <SectionHeader>{header}</SectionHeader>}
      {renderSection ? (
        renderSection()
      ) : (
        <FancyContainer
          fluid={fluid}
          style={contentContainerStyle}
          className={className}
          twoColumn={twoColumn}
        >
          {Blob && (
            <BlobContainer>
              <Blob />
            </BlobContainer>
          )}

          {twoColumn ? (
            <>
              {renderColumnOne()}
              {renderColumnTwo()}
            </>
          ) : (
            children
          )}
        </FancyContainer>
      )}
      {bottomBackgroundImage ? (
        <BottomBackgroundImage bottomBackgroundImage={bottomBackgroundImage} />
      ) : null}
    </SectionContainer>
  )
}

export const BlobSection = styled(Section)`
  display: flex;
  min-height: 400px;
  padding-right: 3rem;

  ${media.forSmallOnly`
    padding: 0 1rem;
    min-height: auto;

    ${BlobContainer} {
      display: none;
    }
  `}
`

Section.BoldText = styled.p`
  font-weight: bold;
  color: ${props => props.theme.black};
  margin: 0;
`

Section.H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${props => props.theme.primaryColor};
  margin: 2.5rem 0 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.forSmallMediumOnly`
    font-size: 2.4rem;
  `}

  ${media.forSmallOnly`
    font-size: 2rem;
  `}
`

Section.Image = styled.img`
  object-fit: contain;
  position: relative;
  z-index: 10;

  ${({ floatLeft }) =>
    floatLeft &&
    css`
      float: left;
      padding: 0 1rem 1rem 0;

      ${media.forSmallOnly`
        padding: 1rem 0;
      `}
    `}

  ${({ floatRight }) =>
    floatRight &&
    css`
      float: right;
      padding: 0 0 1rem 1rem;

      ${media.forSmallOnly`
        padding: 1rem 0;
      `}
    `}


  ${({ responsive }) =>
    responsive &&
    css`
      width: 100%;
      height: 100%;
    `}

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}

  ${({ medium }) =>
    medium &&
    css`
      width: 50%;

      ${media.forSmallMediumOnly`
        width: 60%;
      `}

      ${media.forSmallOnly`
        width: 100%;
      `}
    `}

  ${({ small }) =>
    small &&
    css`
      width: 30%;

      ${media.forSmallMediumOnly`
        width: 50%;
      `}

      ${media.forSmallOnly`
        width: 100%;
      `}
    `}

  ${({ phoneImage }) =>
    phoneImage &&
    css`
      ${media.forSmallMediumOnly`
        max-width: 250px;
      `}

      ${media.forSmallOnly`
        float: none;
        max-width: 175px;
        display: block;
        margin: 1.5rem auto;
      `}
    `}
`

Section.Column = styled.div`
  ${({ fluidGuard }) =>
    fluidGuard &&
    css`
      max-width: 800px;
      padding-right: 4rem;

      ${media.forSmallMediumOnly`
        margin: 0 auto;
        padding: 0 1rem;
      `}
    `}
`

Section.OrderedList = styled.ol``
Section.UnorderedList = styled.ul``

Section.ListItem = styled.li`
  line-height: 1.5;
  margin-bottom: 1rem;
`

Section.ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

Section.FancyTile = styled.div`
  padding: 3rem 2rem;
  border-radius: 60px;
  box-shadow: 0 0px 15px rgba(54, 163, 252, 0.3);
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.primaryColor};
  margin: 2rem 0;

  ${media.forSmallMediumOnly`
    font-size: 2rem;
    padding: 2.5rem 2rem;
  `}

  ${media.forSmallOnly`
    font-size: 1.5rem;
    padding: 2rem;
    margin: 1rem 0;
  `}
`

Section.FancySteps = styled.div``
Section.FancySteps.Group = styled.div`
  display: flex;
`

const StyledFancyStep = styled.div`
  padding: 2rem;
  box-shadow: 0 0px 15px rgba(54, 163, 252, 0.3);
  margin: 2rem;
  border-radius: 2rem;
  line-height: 1.5;
  flex: 1;
  position: relative;
`
const StyledFancyStepNumber = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  color: ${props =>
    props.stepColor ? props.stepColor : props.theme.defaultFontColor};
  font-weight: bold;
  font-size: 50px;
`
const FancyStepNumberArrow = styled(BlueArrow)`
  position: absolute;

  ${({ arrowDirection }) => {
    switch (arrowDirection) {
      case 'down':
        return css`
          transform: translateX(-50%) rotate(90deg);
          bottom: -15px;
          left: 50%;
        `
      case 'right':
        return css`
          transform: translateY(-50%);
          right: -35px;
          top: 50%;
        `

      default:
        return
    }
  }}
`

Section.FancySteps.Step = ({
  children,
  step,
  stepColor,
  showArrow = true,
  arrowDirection = 'down',
}) => {
  return (
    <StyledFancyStep>
      {step && (
        <StyledFancyStepNumber stepColor={stepColor}>
          {step}.
        </StyledFancyStepNumber>
      )}
      {showArrow && <FancyStepNumberArrow arrowDirection={arrowDirection} />}
      {children}
    </StyledFancyStep>
  )
}

const StyledImageCarousel = styled.div``

const ImageCarousel = ({ images = [], className = '' }) => {
  const [activeItem, setActiveItem] = useState(0)

  const thumbnails = createCollageImages(images, { size: 45 })

  return (
    <StyledImageCarousel className={className}>
      <Carousel
        centered
        infinite
        clickToChange
        slidesPerPage={2}
        autoPlay={5000}
        animationSpeed={1000}
        addArrowClickHandler
        value={activeItem}
        onChange={index => setActiveItem(index)}
        breakpoints={{
          991: {
            slidesPerPage: 1,
          },
          680: {
            slidesPerPage: 1,
          },
        }}
      >
        {createCollageImages(images, { responsive: true })}
      </Carousel>
      <Dots
        onChange={val => setActiveItem(val)}
        value={activeItem}
        number={images.length}
        thumbnails={thumbnails}
      />
    </StyledImageCarousel>
  )
}

Section.ImageCarousel = ImageCarousel

const createCollageImages = (images = [], { size, responsive }) =>
  images.map(({ src, alt }, i) => (
    <Section.Image
      src={src}
      alt={alt}
      key={`${i}-${alt}`}
      responsive={responsive}
      size={size}
    />
  ))

const StyledImageCollage = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  > * {
    width: 50%;
    padding: 1rem;
  }

  ${media.forSmallOnly`
    > * {
      width: 100%;
      padding: 1rem;
    }
  `}
`

const StyledImageCollageWrapper = styled.div`
  ${media.forMediumUp`
    ${StyledImageCollage} {
      display: block;
    }

    ${StyledImageCarousel} {
      display: none;
    }
  `}

  ${media.forSmallOnly`
    ${StyledImageCollage} {
      display: none;
    }

    ${StyledImageCarousel} {
      display: block;
    }
  `}
`

Section.ImageCollage = ({ images = [] }) => {
  return (
    <StyledImageCollageWrapper>
      <StyledImageCollage>
        {createCollageImages(images, { responsive: true })}
      </StyledImageCollage>
      <Section.ImageCarousel images={images} />
    </StyledImageCollageWrapper>
  )
}
