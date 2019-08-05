/* eslint-disable import/no-commonjs */
module.exports = {
  siteMetadata: {
    title: 'Caldera | We create outstanding experiences on web and mobile',
    name: 'Caldera',
    siteUrl: 'https://calderadigital.com/',
    description: 'We create outstanding experiences.',
    hero: {
      heading: 'The Caldera blog.',
      maxWidth: 652,
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/caldera_digital',
      },
      {
        name: 'github',
        url: 'https://github.com/caldera-digital',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/calderadigital/',
      },
      // {
      //   name: 'linkedin',
      //   url: 'https://www.linkedin.com/company/narative/',
      // },
      // {
      //   name: 'dribbble',
      //   url: 'https://dribbble.com/narativestudio',
      // },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/blog',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        // TODO
        name: 'Caldera | We Create Outstanding Experiences',
        short_name: 'Caldera',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#0080EE',
        display: 'minimal-ui',
        icon: 'src/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}
