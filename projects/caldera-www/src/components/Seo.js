/**
 * This react helmet code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmet on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const seoQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            social {
              name
              url
            }
            siteUrl
            title
            name
          }
        }
      }
    }
  }
`

export const SEO = ({
  title,
  description,
  children,
  url,
  image = 'https://res.cloudinary.com/calderablog/image/upload/v1564971507/social-link_crvqll.png',
  published,
  pathname,
  timeToRead,
}) => {
  const results = useStaticQuery(seoQuery)
  const site = results.allSite.edges[0].node.siteMetadata
  const twitter = site.social.find(option => option.name === 'twitter') || {}

  const fullURL = path => (path ? `${site.siteUrl}${path}` : site.siteUrl)
  const fullPageTitle = title ? `${title} | ${site.name}` : site.title

  const metaTags = [
    { charset: 'utf-8' },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {
      rel: 'canonical',
      href: fullURL(pathname),
    },
    { itemprop: 'name', content: fullPageTitle },
    { itemprop: 'description', content: description || site.description },
    { itemprop: 'image', content: fullURL(image) },
    { name: 'description', content: description || site.description },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: fullPageTitle },
    { name: 'twitter:description', content: description || site.description },
    { name: 'twitter:creator', content: twitter.url },
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    { property: 'og:title', content: fullPageTitle },
    { property: 'og:url', content: url },
    { property: 'og:image', content: fullURL(image) },
    { property: 'og:description', content: description || site.description },
    { property: 'og:site_name', content: site.name },
  ]

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published })
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', value: 'Reading time' })
    metaTags.push({ name: 'twitter:data1', value: timeToRead })
  }

  return (
    <Helmet
      title={fullPageTitle}
      htmlAttributes={{ lang: 'en' }}
      meta={metaTags}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:700,700i&display=swap"
        rel="stylesheet"
      />
      {children}
    </Helmet>
  )
}
