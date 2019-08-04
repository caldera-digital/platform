import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import Logo from '../assets/svgs/caldera-logo.svg'
import { createRoutes } from './NavBar'
import { MOCK_BLOGS } from './Homepage/LatestFromOurBlog'
import { Button } from './Button'

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
          {MOCK_BLOGS.slice(0, 3).map(blog => (
            <Link to={blog.to} key={blog.to}>
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
