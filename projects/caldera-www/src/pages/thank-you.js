import React from 'react'
import { Layout, SEO } from '../components'
import { ContactThankYouContainer } from './contact-us'

const ThankYou = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Thank You" />
      <ContactThankYouContainer>
        <h1>Thank You</h1>
        <p>Someone from our team will be in touch soon.</p>
      </ContactThankYouContainer>
    </Layout>
  )
}

export default ThankYou
