import React from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import MockBlog from '../../assets/images/mock-blog.jpg'
import { Link } from 'gatsby'

export const MOCK_BLOGS = [
  {
    title: 'What’s More Important, Process or Results?',
    text:
      'A close friend once asked me, “What’s more important, process or results?” It was after a job interview in college and I immediately replied, “results of course!”',
    image: MockBlog,
    to: '/1',
  },
  {
    title: 'What’s More Important, Process or Results?',
    text:
      'A close friend once asked me, “What’s more important, process or results?” It was after a job interview in college and I immediately replied, “results of course!”',
    image: MockBlog,
    to: '/2',
  },
  {
    title: 'What’s More Important, Process or Results?',
    text:
      'A close friend once asked me, “What’s more important, process or results?” It was after a job interview in college and I immediately replied, “results of course!”',
    image: MockBlog,
    to: '/3',
  },
]

const BlogItem = styled(Link)`
  display: flex;
  margin-bottom: 2.5rem;
  border-radius: 60px;
  background-color: ${props => props.theme.white};
  overflow: hidden;

  > img {
    width: 25%;
    object-fit: cover;
  }

  > div {
    width: 75%;
    padding: 2rem;

    h3 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${props => props.theme.defaultFontColor};
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    > img {
      width: 100%;
      height: 200px;
    }

    > div {
      width: 100%;

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }

      p {
        color: ${props => props.theme.defaultFontColor};
      }
    }
  }
`

export const LatestFromOurBlog = () => {
  return (
    <Section header="Latest from Our Blog" lightBackground>
      {MOCK_BLOGS.map(blog => (
        <BlogItem key={blog.to} to={blog.to}>
          <img src={blog.image} alt={blog.title} />
          <div>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
          </div>
        </BlogItem>
      ))}
    </Section>
  )
}
