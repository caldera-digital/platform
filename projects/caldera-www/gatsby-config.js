/* eslint-disable import/no-commonjs */
module.exports = {
  siteMetadata: {
    title: 'Caldera',
    name: 'Caldera',
    siteUrl: 'https://calderadigital.com/',
    description: 'We create great web experiences.',
    hero: {
      heading: 'The Caldera blog.',
      maxWidth: 652,
    },
    social: [
      // {
      //   name: 'twitter',
      //   url: 'https://twitter.com/narative',
      // },
      {
        name: 'github',
        url: 'https://github.com/caldera-digital',
      },
      // {
      //   name: 'instagram',
      //   url: 'https://instagram.com/narative.co',
      // },
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
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        // TODO
        // icon: 'content/assets/gatsby-icon.png',
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
