import React from 'react'
import { Layout, SEO, Hero, Section, ImageLinkSection } from '../components'
import { OUR_WORK } from '../ourWork'

const OurWork = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Our Work" />
      <Hero
        secondary
        title="Our Work"
        secondaryText="We're proud to of worked with many great brands and to of launched multiple products."
      />
      <Section>
        {OUR_WORK.map(work => (
          <ImageLinkSection key={work.to} {...work} />
        ))}
      </Section>
    </Layout>
  )
}

export default OurWork
