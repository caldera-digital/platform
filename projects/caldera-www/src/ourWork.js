import React from 'react'

import ItsADatePhone from './assets/images/its-a-date-phone.png'
import PrideOfTheMeadowsWeb from './assets/images/pride-of-the-meadows-web.png'
import Gamebyrd from './assets/images/gamebyrd-mocks.png'
import GuessTheThrone from './assets/images/guess-the-throne-mockup-web.png'

export const OUR_WORK = [
  {
    imageConfig: {
      src: ItsADatePhone,
      // eslint-disable-next-line quotes
      alt: "It's a Date app launch screen",
    },
    // eslint-disable-next-line quotes
    title: "It's a Date",
    to: '/case-studies/its-a-date',
    reverse: false,
    description() {
      return (
        <p>
          TODO: The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
      )
    },
  },
  {
    imageConfig: {
      src: PrideOfTheMeadowsWeb,
      alt: 'Pride of the Meadows landing page',
    },
    title: 'Pride of the Meadows',
    to: '/case-studies/pride-of-the-meadows',
    reverse: true,
    description() {
      return (
        <p>
          TODO: The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
      )
    },
  },
  {
    imageConfig: {
      src: GuessTheThrone,
      alt: 'Guess the Throne landing page',
    },
    title: 'Guess the Throne',
    to: '/case-studies/guess-the-throne',
    reverse: false,
    description() {
      return (
        <p>
          TODO: The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
      )
    },
  },
  {
    imageConfig: {
      src: Gamebyrd,
      alt: 'Gamebyrd landing page',
    },
    title: 'Gamebyrd',
    to: '/case-studies/gamebyrd',
    reverse: true,
    description() {
      return (
        <p>
          TODO: The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
      )
    },
  },
]
