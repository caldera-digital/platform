import React from 'react'
import { Layout, SEO, Section } from '../components'
import { ContactThankYouContainer } from './contact-us'
import { Link } from 'gatsby'
import { OUR_WORK } from '../ourWork'

const ThankYou = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Thank You" />
      <ContactThankYouContainer>
        <h1>Thank You</h1>
        <p>Someone from our team will be in touch soon.</p>

        <p>Check out some of our work:</p>
        <Section noPadding>
          <Section.UnorderedList>
            {OUR_WORK.slice(0, 3).map(work => (
              <Section.ListItem key={work.to}>
                <Link to={work.to}>{work.title}</Link>
              </Section.ListItem>
            ))}
          </Section.UnorderedList>
        </Section>
      </ContactThankYouContainer>
    </Layout>
  )
}

export default ThankYou
