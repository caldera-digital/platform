import React from 'react'
import { createOptimizedCloudinary } from './utils/utilityService'

export const OUR_WORK = [
  {
    imageConfig: {
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/calderablog/image/upload/v1565066770/its-a-date-phone_izkfva.png',
      ),
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
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/calderablog/image/upload/v1565064208/Image_68_2x_flau11.png',
      ),
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
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/calderablog/image/upload/v1565066031/guess-the-throne-mockup-web_st6rbk.png',
      ),
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
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/calderablog/image/upload/v1565065226/Image_45_2x_aoybmp.png',
      ),
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
