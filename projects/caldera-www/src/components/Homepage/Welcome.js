import React from 'react'
import { BlobSection } from '../Section'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

import Blob from '../../assets/svgs/blue-blob2.svg'

const WelcomeTextContainer = styled.div`
  flex: 1;

  h2 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  ${media.forSmallMediumOnly`
    h2 {
      font-size: 2rem;
      margin-bottom: 1.25rem;
    }
  `}
`

const BreakoutSection = styled.div`
  border-left: 6px solid ${props => props.theme.secondaryColor};
  padding-left: 1.5rem;
  margin-left: 1rem;

  > p {
    &:first-child {
      font-size: 1.8rem;
    }

    &:last-child {
      color: ${props => props.theme.grayText};
    }
  }

  ${media.forSmallMediumOnly`
    padding-left: 1.5rem;
    margin-left: 1rem;

    > p {
      &:first-child {
        font-size: 1.4rem;
      }

      &:last-child {
        color: ${props => props.theme.grayText};
      }
    }
  `}
`

export const Welcome = () => {
  return (
    <BlobSection fluid blob={Blob}>
      <WelcomeTextContainer>
        <h2>
          We use innovative technology to bring your vision, brand, and identity
          to life.
        </h2>
        <BreakoutSection>
          <p>
            We are graphic artists and designers, expert coders, and published
            writers. Caldera is your one-stop-shop. We take pride in working
            with the best and latest technology out there - and in turn, bring
            only the best to your business.
          </p>
        </BreakoutSection>
      </WelcomeTextContainer>
    </BlobSection>
  )
}
