import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import Logo from '../assets/svgs/caldera-logo.svg'
import { createRoutes } from './NavBar'
import { Button, LinkButton } from './Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Input } from './Form'
import { emailIsValid } from '../utils/formUtils'

export const latestBlogsQuery = graphql`
  {
    allArticle(limit: 3, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          date(formatString: "MMMM Do, YYYY")
          title
          timeToRead
          excerpt
          slug
          hero {
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 90) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  }
`

const CopyrightContainer = styled.span`
  font-size: 0.8rem;
`

const StyledFooterWrapper = styled.footer`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.white};
  padding: 5rem 0;
  position: relative;

  @media (max-width: 767px) {
    padding: 3rem 0;
  }

  ${CopyrightContainer} {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledFooter = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const FooterColumn = styled.div`
  width: 25%;
  padding: 0 1.5rem;
  min-height: 130px;
  border-left: 6px solid ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    color: ${props => props.theme.white} !important;
    display: block;
    margin-bottom: 0.5rem;
  }

  ${media.forSmallMediumOnly`
    width: 33%;
  `}

  @media (max-width: 767px) {
    margin-bottom: 2rem;
    min-height: auto;

    a {
      text-align: center;
    }
  }
`

const LogoContainer = styled(FooterColumn)`
  text-align: center;
  border: none;

  svg {
    fill: ${props => props.theme.white};
    margin-bottom: 0.5rem;
    width: 100%;
    max-width: 250px;
  }

  ${media.forSmallMediumOnly`
    width: 33%;
  `}

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;

    svg {
      margin-bottom: 0;
    }
  }
`

const LinksContainer = styled(FooterColumn)`
  ${media.forSmallMediumOnly`
    width: 25%;
  `}

  @media (max-width: 767px) {
    border: none;
    width: 100%;

    a {
      padding: 2px 0;
      margin-bottom: 0.75rem;
    }
  }
`
const BlogsContainer = styled(FooterColumn)`
  ${media.forSmallMediumOnly`
    display: none;
  `}
`
const EmailContainer = styled(FooterColumn)`
  border: none;

  p {
    text-align: center;
    font-size: 0.9rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      padding: 8px 4px;
      width: 100%;
      margin-bottom: 1rem;
      border-radius: 2px;
      border: none;
      max-width: 300px;
    }
  }

  ${CopyrightContainer} {
    display: none;
  }

  ${media.forSmallMediumOnly`
    width: 38%;
  `}

  @media (max-width: 767px) {
    width: 100%;
  }
`
const FooterCTA = styled.div`
  background-color: ${props => props.theme.lightBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;

  p {
    text-align: center;
    max-width: 500px;
  }

  span {
    color: ${props => props.theme.primaryColor};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ${media.forSmallMediumOnly`
    padding: 6rem 0;

    span {
      font-size: 2.25rem;
    }
  `}

  ${media.forSmallMediumOnly`
    padding: 4rem 1rem;

    span {
      font-size: 2rem;
    }
  `}
`

const Copyright = () => (
  <CopyrightContainer>
    Caldera LLC © {new Date().getFullYear()}
  </CopyrightContainer>
)

export const Footer = ({ showFooterCTA = true }) => {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const {
    allArticle: { edges },
  } = useStaticQuery(latestBlogsQuery)

  return (
    <>
      {showFooterCTA && (
        <FooterCTA>
          <p>
            Our team is always looking for new and exciting products to be a
            part of! Interested in learning how we can help?
          </p>

          <span>Let's get started.</span>
          <LinkButton to="/contact-us">Contact Us</LinkButton>
        </FooterCTA>
      )}

      <StyledFooterWrapper>
        <StyledFooter>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <LinksContainer>
            {createRoutes().map(({ route, text }) => (
              <Link to={route} key={route}>
                {text}
              </Link>
            ))}
          </LinksContainer>
          <BlogsContainer>
            {edges.map(({ node: blog }) => (
              <Link to={blog.slug} key={blog.slug}>
                {blog.title}
              </Link>
            ))}
          </BlogsContainer>
          <EmailContainer>
            <p>Subscribe to our Newsletter!</p>
            <form
              onSubmit={async e => {
                e.preventDefault()
                await addToMailchimp(email)

                setEmail('')
                setShowSuccess(true)
              }}
            >
              <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                containerStyle={{ width: '100%', margin: 0 }}
              />
              <Button size="small" disabled={!emailIsValid(email)}>
                Submit
              </Button>
              {showSuccess && (
                <span style={{ color: 'white', marginTop: '1rem' }}>
                  Subscribed!
                </span>
              )}
            </form>
          </EmailContainer>
        </StyledFooter>
        <Copyright />
      </StyledFooterWrapper>
    </>
  )
}
