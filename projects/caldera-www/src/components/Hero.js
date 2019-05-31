import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import HeroBlob from '../assets/svgs/blue-blob2.svg'
import Phone from '../assets/images/homeHeroImage.png'

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
    padding: 6rem;

    h1 {
      font-size: 70px;
      font-weight: bold;
    }

    img {
      width: 100%;
      object-fit: contain;
      max-width: 500px;
      float: right;
    }
  }

  .backgroundHeroBlob {
    position: absolute;
    top: -25%;
    right: -25%;
    z-index: -1;
  }
`

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroBlob className="backgroundHeroBlob" />
      <div>
        <h1>We create outstanding experiences for B2B companies</h1>
        <Button>Hello</Button>
      </div>
      <div>
        <img src={Phone} alt="fancy phone graphic" />
      </div>
    </HeroContainer>
  )
}
