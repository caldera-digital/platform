import React from 'react'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { jiggle } from '../style/utils'

const SectionContainer = styled.section`
  padding: 5rem 0 4rem;
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
    padding: 4rem 0 3rem;
    min-height: auto !important;
  `}

  ${media.forSmallOnly`
    padding: 3rem 0;
  `}
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

export const Section = ({
  children,
  fluid = false,
  blob: Blob,
  lightBackground,
  backgroundColor,
  bottomBackgroundImage,
  renderSection,
  sectionContainerStyle = {},
  contentContainerStyle = {},
  sectionContainerClassName = '',
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
    >
      {header && <SectionHeader>{header}</SectionHeader>}
      {renderSection ? (
        renderSection()
      ) : (
        <Container
          fluid={fluid}
          style={contentContainerStyle}
          className={className}
        >
          {Blob && (
            <BlobContainer>
              <Blob />
            </BlobContainer>
          )}
          {children}
        </Container>
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
