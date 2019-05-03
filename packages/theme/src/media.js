import { css } from 'styled-components'

const sizes = {
  forSmallOnly: {
    max: true,
    width: 680,
  },
  forSmallMediumOnly: {
    max: true,
    width: 991,
  },
  forMediumUp: {
    max: false,
    width: 681,
  },
  forLargeUp: {
    max: false,
    width: 992,
  },
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (sizes[label].max) {
      return css`
        @media (max-width: ${sizes[label].width / 16}em) {
          ${css(...args)};
        }
      `
    }
    return css`
      @media (min-width: ${sizes[label].width / 16}em) {
        ${css(...args)};
      }
    `
  }

  return acc
}, {})
