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

    > div {
      h3 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `}

  ${media.forSmallMediumOnly`
    flex-direction: column;

    > svg {
      width: 50%;
    }

    > div {
      h3 {
        font-size: 1.5rem;
      }
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
                A mobile app's success and technical aspects lie in the answers
                to these three initial questions: Who will it serve? What will
                it be? And what will it do? With our human-centric and high-tech
                approach to application development, we ensure that what we
                build is more than just code. Our apps progress with
                technological innovation - which means they will never be
                out-of-date.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Analytics />
            <div>
              <h3>Automation</h3>
              <p>
                If it can be repeated, it can be automated. We employ a variety
                of techniques to make repetitive tasks easy as pressing a
                button. Whether it be creating a spreadsheet plugin or pulling
                data to showcase on a real time dashboard, we have you covered.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Web />
            <div>
              <h3>Web Applications</h3>
              <p>
                We will help your business stand out with our innovative
                designs, responsive web pages, and phenomenal user experience.
                Technology is constantly improving, and your site will too with
                progressive updates and eye-catching graphic design. Your
                business is the masterpiece of your mind - and we are the team
                to bring it to life.
              </p>
            </div>
          </CarouselItem>
        </Carousel>
      )}
    />
  )
}
