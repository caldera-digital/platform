import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Hero } from '../components'
import { OurWork } from '../components/Homepage/OurWork'
import { OurServices } from '../components/Homepage/OurServices'
import { Welcome } from '../components/Homepage/Welcome'
import { WhoWeveWorkedWith } from '../components/Homepage/WhoWeveWorkedWith'
import { LatestFromOurBlog } from '../components/Homepage/LatestFromOurBlog'
import { CallToAction } from '../components/Homepage/CallToAction'

import Phone from '../assets/images/homeHeroImage.png'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero
        title="We create outstanding experiences for B2B companies"
        secondaryText="Web | Mobile | Analytics"
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

// TODO: Leaving as documentation, don't think we need
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
