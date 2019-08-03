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
        <h2>Fusing technology and identity to tell your story</h2>
        <BreakoutSection>
          <p>
            What do you get when you bring together a collection of computer
            nerds, graphic artists and inspired writers? Caldera.
          </p>
          <p>
            We take pride in bringing out the best in each other - and in turn,
            bringing out the best in your business. Our team does that by
            combining the latest and greatest technology with proven user
            experiences to create outstanding results.
          </p>
        </BreakoutSection>
      </WelcomeTextContainer>
    </BlobSection>
  )
}
