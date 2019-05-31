import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const StyledLoading = styled.div`
  height: 0;
  width: 0;
  padding: ${({ size }) => {
    if (size === 'large') {
      return '9px'
    } else if (size === 'medium') {
      return '6px'
    }
    return '3px'
  }};
  border: ${({ size }) => {
    let borderSize
    if (size === 'large') {
      borderSize = '6px'
    } else if (size === 'medium') {
      borderSize = '5px'
    } else {
      borderSize = '4px'
    }

    return `${borderSize} solid #ccc`
  }};
  border-right-color: #888;
  border-radius: 50%;
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    /* 100% keyframe for  clockwise.
     use 0% instead for anticlockwise */
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loading = ({ size = 'small' }) => (
  <LoadingContainer>
    <StyledLoading size={size} />
  </LoadingContainer>
)
