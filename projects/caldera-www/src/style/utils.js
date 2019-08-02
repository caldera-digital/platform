import { keyframes } from 'styled-components'

export const jiggle = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1) translate(30px, 20px) rotate(10deg);
  }
  100% {
    transform: scale(1);
  }
`
