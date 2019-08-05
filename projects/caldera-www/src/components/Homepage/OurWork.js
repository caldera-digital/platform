import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { jiggle } from '../../style/utils'
import { OUR_WORK } from '../../ourWork'
import { ImageLinkSection } from '../ImageLinkSection'

import Blob from '../../assets/svgs/blue-blob2.svg'
import Blob3 from '../../assets/svgs/blue-blob3.svg'

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
              {OUR_WORK.slice(0, 2).map(work => (
                <ImageLinkSection key={work.to} {...work} />
              ))}
            </OurWorkContainer>
          </OurWorkSection>
        )
      }}
    />
  )
}
