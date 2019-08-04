import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

export const ContentContainer = styled.div`
  margin: 0 auto 6rem;

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
    margin: 2.5rem 0 1.5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ${media.forSmallMediumOnly`
    h2 {
      font-size: 2.4rem;
    }
  `}

  ${media.forSmallOnly`
    h2 {
      font-size: 2rem;
    }
  `}
`
