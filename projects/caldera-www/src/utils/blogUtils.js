import { graphql } from 'gatsby'

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
