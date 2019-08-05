import React from 'react'
import { Layout, SEO, Hero } from '../components'
import { OurWork } from '../components/Homepage/OurWork'
import { OurServices } from '../components/Homepage/OurServices'
import { Welcome } from '../components/Homepage/Welcome'
import { WhoWeveWorkedWith } from '../components/Homepage/WhoWeveWorkedWith'
import { LatestFromOurBlog } from '../components/Homepage/LatestFromOurBlog'
import { CallToAction } from '../components/Homepage/CallToAction'

import Phone from '../assets/images/homeHeroImage.png'

const HomePage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Hero
        title="We create outstanding experiences."
        secondaryText="Web | Mobile | Automation"
        heroImgConfig={{
          src: Phone,
          alt: 'Phone with blobs floating out of it',
        }}
      />
      <Welcome />
      <WhoWeveWorkedWith />
      <OurServices />
      <OurWork />
      <LatestFromOurBlog />
      <CallToAction />
    </Layout>
  )
}

export default HomePage
