import React from 'react'
import CalderaLogo from '../../../../assets/svgs/caldera-logo.svg'

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo({ fill }) {
  return <CalderaLogo height="40px" fill={fill} />
}
