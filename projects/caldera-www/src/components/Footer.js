import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import Logo from '../assets/svgs/caldera-logo.svg'
import { createRoutes } from './NavBar'
import { Button } from './Button'

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

const Copyright = () => (
  <CopyrightContainer>
    Caldera LLC © {new Date().getFullYear()}
  </CopyrightContainer>
)

export const Footer = () => {
  const {
    allArticle: { edges },
  } = useStaticQuery(latestBlogsQuery)

  return (
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
          <form onSubmit={() => console.log('submit called')}>
            <input />
            <Button size="small">Submit</Button>
          </form>
        </EmailContainer>
      </StyledFooter>
      <Copyright />
    </StyledFooterWrapper>
  )
}
