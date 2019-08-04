import React from 'react'
import { jiggle } from '../style/utils'
import { media } from '@caldera-digital/theme'
import { css } from 'styled-components'

export const COMMON_BLOB_STYLES = css`
  svg.blob {
    position: absolute;
    z-index: -1;
    animation: 15s ${jiggle} infinite;

    &.topRight {
      top: -10%;
      right: -30%;

      ${media.forSmallOnly`
        top: 0;
        right: -10%;
      `}
    }

    &.topLeft {
      top: -10%;
      left: -50%;

      ${media.forSmallOnly`
        top: 0;
        left: -10%;
      `}
    }

    &.bottomLeft {
      left: -35%;
      bottom: -15%;

      ${media.forSmallOnly`
        left: -20%;
        bottom: -10%;
      `}
    }

    &.blob-small {
      width: 50%;

      ${media.forSmallOnly`
        width: 120%;
      `}
    }

    &.blob-medium {
      width: 70%;

      ${media.forSmallOnly`
        width: 120%;
      `}
    }

    &.blob-smedium {
    }
    &.blob-large {
    }
    &.blob-extra-large {
      width: 130%;
    }

    &.hideOnSmallMedium {
      ${media.forSmallMediumOnly`
        display: none;
      `}
    }
  }
`

export const BlobHandler = ({ blobs = [] }) => {
  return (
    <>
      {blobs.map(({ blob: Blob, position, size, hideOnSmallMedium }, i) => (
        <Blob
          key={i}
          className={`blob ${position} ${size ? `blob-${size}` : ''} ${
            hideOnSmallMedium ? 'hideOnSmallMedium' : ''
          }`}
        />
      ))}
    </>
  )
}
