import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import { Button } from '../Button'

const CallToActionButton = styled(Button)`
  text-align: center;
  margin: 0 auto;
`

export const CallToAction = () => {
  return (
    <Section header="Let's get Started">
      <CallToActionButton>Contact Us</CallToActionButton>
    </Section>
  )
}
