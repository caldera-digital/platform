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
          The dating world now begins its journey online, but we found that
          those fingers were getting tired of swiping right. It’s a Date is an
          innovative app that curates a list of local, action-packed dating
          experiences. This app doesn’t require a swipe, but rather a bit of
          imagination as users design their perfect date and propose it to other
          singles in their area. Get out there and meet people, explore new
          destinations, or share the ones you already love in your hometown all
          in one app.
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
          Going grocery shopping with a paper list in hand is a thing of the
          past. These days it is all about home delivery, an online presence,
          and location. We took the hassle out of getting fresh produce with a
          clean, easy to navigate website that is both informative and
          memorable. Now consumers can view the produce on hand, find the
          nearest location, and even read some recipe ideas.
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
        <>
          <p>
            The team at Caldera was wild about Game of Thrones, so naturally, we
            wanted to get involved in a death pool for the final season. A death
            pool is similar to a March Madness bracket: you select who you think
            out of the major characters will live or die. One point was awarded
            for each correct guess at the end of the season. Potential point
            totals were updated after each round (episode), and he/she with the
            most points at the end of the season won.
          </p>
          <p>
            However, after scouring the internet, we could not find one Death
            Pool which suited our needs.
          </p>
        </>
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
          The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
      )
    },
  },
]
