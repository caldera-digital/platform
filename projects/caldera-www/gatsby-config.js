/* eslint-disable import/no-commonjs */
module.exports = {
  siteMetadata: {
    title: 'Caldera | You Dream it. We Bring it to Life.',
    name: 'Caldera',
    siteUrl: 'https://calderadigital.com/',
    description:
      'Caldera is a product and application development agency that uses innovative technology to bring your vision, brand, and identity to life through human-centered design practices.',
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
        trackingId: 'UA-120914445-1',
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
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'calderadigital',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://calderadigital.us18.list-manage.com/subscribe/post?u=4c88cd983f586a817f4b1b345&amp;id=0ed9147da3',
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: ['Promise', 'Array.prototype.forEach'],
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://8d2d575dedeb41f989e0cc19e83aaa0e@sentry.io/1523590',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
  ],
}
