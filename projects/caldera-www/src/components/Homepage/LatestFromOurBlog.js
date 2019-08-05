import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import { Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { latestBlogsQuery } from '../../utils/blogUtils'

const ImageContainer = styled.div``
const BlogContentContainer = styled.div``
const SubText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1.5rem;
`

const BlogItem = styled(Link)`
  display: flex;
  margin-bottom: 2.5rem;
  border-radius: 60px;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  ${ImageContainer} {
    width: 35%;
    object-fit: cover;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  ${BlogContentContainer} {
    width: 65%;
    padding: 2rem;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      color: ${props => props.theme.defaultFontColor};
    }

    ${SubText} {
      color: ${props => props.theme.grayText};
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    ${ImageContainer} {
      width: 100%;
      height: 200px;
    }

    ${BlogContentContainer} {
      width: 100%;

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`

export const LatestFromOurBlog = () => {
  const {
    allArticle: { edges },
  } = useStaticQuery(latestBlogsQuery)

  return (
    <Section header="Latest from Our Blog" lightBackground>
      {edges.map(({ node: blog }) => (
        <BlogItem key={blog.slug} to={blog.slug}>
          <ImageContainer>
            <Img fluid={blog.hero.narrow.fluid} />
          </ImageContainer>
          <BlogContentContainer>
            <h3>{blog.title}</h3>
            <SubText>
              {blog.date} / {blog.timeToRead} minutes to read
            </SubText>
            <p>{blog.excerpt}</p>
          </BlogContentContainer>
        </BlogItem>
      ))}
    </Section>
  )
}
