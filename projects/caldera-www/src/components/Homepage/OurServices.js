import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import Carousel from '@brainhubeu/react-carousel'

import Analytics from '../../assets/svgs/analytics.svg'
import Apps from '../../assets/svgs/apps.svg'
import Web from '../../assets/svgs/web.svg'

import '@brainhubeu/react-carousel/lib/style.css'

const CarouselItem = styled.div`
  border-radius: 60px;
  box-shadow: 0 3px 17px rgba(54, 163, 252, 0.2);
  min-height: 400px;
  width: 100%;
  margin: 1rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};

  > svg {
    width: 30%;
    margin-right: 2rem;
  }

  > div {
    flex: 1;

    h3 {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }

  ${media.forSmallMediumOnly`
    flex-direction: column;

    > svg {
      margin: 0 0 2rem;
    }
  `}
`

export const OurServices = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  return (
    <Section
      header="Our Services"
      lightBackground
      renderSection={() => (
        <Carousel
          centered
          infinite
          clickToChange
          slidesPerPage={2}
          autoPlay={5000}
          animationSpeed={1000}
          addArrowClickHandler
          value={currentIndex}
          onChange={index => setCurrentIndex(index)}
          breakpoints={{
            991: {
              slidesPerPage: 1,
            },
            680: {
              slidesPerPage: 1,
            },
          }}
        >
          <CarouselItem>
            <Apps />
            <div>
              <h3>Mobile Applications</h3>
              <p>
                It all starts with the basics. The success of any app can be
                tracked to the initial discussions about what it will do, what
                it will be, and who it will serve. The answers to these
                questions allow the technical aspects to fall into place.
              </p>
              <p>
                With our human-centric methods and high-tech approach to
                application development, we ensure what we’re building is more
                than just code. Our apps become a means towards lasting
                progress.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Analytics />
            <div>
              <h3>Analytics</h3>
              <p>
                It all starts with the basics. The success of any app can be
                tracked to the initial discussions about what it will do, what
                it will be, and who it will serve. The answers to these
                questions allow the technical aspects to fall into place.
              </p>
              <p>
                With our human-centric methods and high-tech approach to
                application development, we ensure what we’re building is more
                than just code. Our apps become a means towards lasting
                progress.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Web />
            <div>
              <h3>Web Applications</h3>
              <p>
                It all starts with the basics. The success of any app can be
                tracked to the initial discussions about what it will do, what
                it will be, and who it will serve. The answers to these
                questions allow the technical aspects to fall into place.
              </p>
              <p>
                With our human-centric methods and high-tech approach to
                application development, we ensure what we’re building is more
                than just code. Our apps become a means towards lasting
                progress.
              </p>
            </div>
          </CarouselItem>
        </Carousel>
      )}
    />
  )
}
