import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import { LinkButton } from '../Button'

const CallToActionButton = styled(LinkButton)`
  text-align: center;
  margin: 0 auto;
`

export const CallToAction = () => {
  return (
    <Section
      header="Let's get Started"
      contentContainerStyle={{ display: 'flex' }}
    >
      <CallToActionButton to="/contact-us">Contact Us</CallToActionButton>
    </Section>
  )
}
