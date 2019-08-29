import { Spin } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

const StyledLoader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Loading: FC = () => {
  return <StyledLoader />
}
