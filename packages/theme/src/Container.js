import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) =>
    !fluid &&
    css`
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: ${props => props.theme.maxContainerWidth};
      }
    `}
`
