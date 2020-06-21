import React from 'react'
import { Layout, SEO, Hero, GroovyPhone } from '../components'
import { OurServices } from '../components/Homepage/OurServices'
import { Welcome } from '../components/Homepage/Welcome'
import { WhoWeveWorkedWith } from '../components/Homepage/WhoWeveWorkedWith'
import { CallToAction } from '../components/Homepage/CallToAction'
import styled, { keyframes } from 'styled-components'
import { media } from '@caldera-digital/theme'

export const jiggle = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08) translate(3px, 3px) rotate(6deg);
  }
  100% {
    transform: scale(1);
  }
`

const StyledPhoneContainer = styled.div`
  max-width: 550px;
  width: 100%;
  height: 80vh;
  margin-right: 5rem;

  ${media.forSmallMediumOnly`
    max-width: 400px;
    height: 60vh;
    margin: 0 0 0 5rem;
  `}

  ${media.forSmallMediumOnly`
    margin: 0rem;
    padding: 2rem 3rem 0 2rem;
  `}
`

export const StyledHeroPhone = styled(GroovyPhone)`
  width: 100%;
  height: 100%;
  overflow: visible;

  /* Little blue */
  #Layer_1-8,
  #Layer_2-9 {
    animation: 8s ${jiggle} infinite;
  }

  /* Big teal */
  #Layer_2-3,
  #Layer_2-2 {
    animation: 8s ${jiggle} infinite;
    animation-delay: 2s;
  }

  /* Big blue */
  #Layer_2-4,
  #Layer_2 {
    animation: 8s ${jiggle} infinite;
    animation-delay: 1.5s;
  }

  /* Orange */
  #Layer_2-6,
  #Layer_2-5 {
    animation: 8s ${jiggle} infinite;
    animation-delay: 1s;
  }

  /* Red */
  #Layer_2-10,
  #Layer_1-7 {
    animation: 8s ${jiggle} infinite;
  }
`

const HomePage = ({ location }) => {
  return (
    <Layout location={location} showFooterCTA={false}>
      <SEO />
      <Hero
        title="You Dream it. We Bring it to Life."
        secondaryText="Web | Mobile | Automation"
        renderRightSide={() => (
          <StyledPhoneContainer>
            <StyledHeroPhone />
          </StyledPhoneContainer>
        )}
        blobs={[]}
      />
      <Welcome />
      <WhoWeveWorkedWith />
      <OurServices />
      <CallToAction />
    </Layout>
  )
}

export default HomePage
