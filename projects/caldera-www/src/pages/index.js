import React from 'react'
import { graphql } from 'gatsby'
import { Hero, Layout, SEO, BlobSection, Section } from '../components'
import Blob from '../assets/svgs/blue-blob2.svg'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Analytics from '../assets/svgs/analytics.svg'
import Apps from '../assets/svgs/apps.svg'
import Web from '../assets/svgs/web.svg'
import CAMLogo from '../assets/rawSvgs/clients/cam-logo.svg'
import POTMLogo from '../assets/rawSvgs/clients/potm-logo.svg'
import TenOaksLogo from '../assets/rawSvgs/clients/ten-oaks-logo.svg'
import ItsADateLogo from '../assets/images/its-a-date-logo.png'

const CLIENTS = [
  {
    name: 'Ten Oaks Flooring',
    image: TenOaksLogo,
  },
  {
    name: 'CAM',
    image: CAMLogo,
  },
  {
    name: 'Pride of the Meadows',
    image: POTMLogo,
  },
  {
    // eslint-disable-next-line quotes
    name: "It's a Date",
    image: ItsADateLogo,
  },
]

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

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.forSmallMediumOnly`
    flex-wrap: wrap;
  `}
`

const FlexibleImage = styled.div`
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
    padding: 2rem 0.5rem;

    &:nth-child(odd) {
      padding-left: 0;
    }
    &:nth-child(even) {
      padding-right: 0;
    }
  `}
`

const BlogIndex = ({ data, location }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero />
      <BlobSection fluid blob={Blob}>
        <WelcomeTextContainer>
          <h2>Fusing technology and identity to tell your story</h2>
          <BreakoutSection>
            <p>
              What do you get when you bring together a collection of computer
              nerds, graphic artists and inspired writers? Caldera.
            </p>
            <p>
              We take pride in bringing out the best in each other - and in
              turn, bringing out the best in your business. Our team does that
              by combining the latest and greatest technology with proven user
              experiences to create outstanding results.
            </p>
          </BreakoutSection>
        </WelcomeTextContainer>
      </BlobSection>
      <Section header="Who We've Worked With">
        <LogosWrapper>
          {CLIENTS.map(client => (
            <FlexibleImage>
              <img src={client.image} alt={client.name} key={client.name} />
            </FlexibleImage>
          ))}
        </LogosWrapper>
      </Section>
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
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
