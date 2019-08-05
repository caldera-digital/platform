import React from 'react'
import { Layout, SEO, Hero, Section, ImageLinkSection } from '../components'
import { OUR_WORK } from '../ourWork'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

const OurWorkSection = styled(Section)`
  ${media.forSmallOnly`
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`

const OurWork = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Our Work" />
      <Hero
        secondary
        title="Our Work"
        secondaryText="We're proud to of worked with many great brands and to of launched multiple products."
      />
      <OurWorkSection>
        {OUR_WORK.map(work => (
          <ImageLinkSection key={work.to} {...work} />
        ))}
      </OurWorkSection>
    </Layout>
  )
}

export default OurWork
