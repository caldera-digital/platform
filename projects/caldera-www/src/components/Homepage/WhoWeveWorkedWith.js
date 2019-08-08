import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

import CAMLogo from '../../assets/rawSvgs/clients/cam-logo.svg'
import POTMLogo from '../../assets/rawSvgs/clients/potm-logo.svg'
import TenOaksLogo from '../../assets/rawSvgs/clients/ten-oaks-logo.svg'
import ItsADateLogo from '../../assets/images/its-a-date-logo.png'

const CLIENTS = [
  {
    name: 'Ten Oaks Flooring',
    to: 'https://www.tenoaksflooring.com/',
    image: TenOaksLogo,
  },
  {
    name: 'CAM',
    to: 'https://www.camaerospace.com/',
    image: CAMLogo,
  },
  {
    name: 'Pride of the Meadows',
    to: 'https://www.prideofthemeadows.com/',
    image: POTMLogo,
  },
  {
    // eslint-disable-next-line quotes
    name: "It's a Date",
    to: 'https://www.itsadate.app/',
    image: ItsADateLogo,
  },
]

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.forSmallMediumOnly`
    flex-wrap: wrap;
  `}
`

const FlexibleImage = styled.a`
  flex: 1;
  padding: 1rem;
  height: 150px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.forSmallMediumOnly`
    flex: auto;
    height: 175px;
    width: 50%;
    padding: 2rem 1rem;
  `}

  ${media.forSmallOnly`
    padding: 2rem 1rem;

    &:nth-child(odd) {
      padding-left: 0;
    }
    &:nth-child(even) {
      padding-right: 0;
    }
  `}
`

export const WhoWeveWorkedWith = () => {
  return (
    <Section header="Who We've Worked With">
      <LogosWrapper>
        {CLIENTS.map(client => (
          <FlexibleImage
            key={client.name}
            href={client.to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={client.image} alt={client.name} />
          </FlexibleImage>
        ))}
      </LogosWrapper>
    </Section>
  )
}
