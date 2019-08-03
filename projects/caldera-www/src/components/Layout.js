import React from 'react'
import {
  CalderaDigitalThemeProvider,
  CalderaDigitalThemeConsumer,
  GlobalStyle,
  media,
} from '@caldera-digital/theme'
import styled, { ThemeProvider } from 'styled-components'
import { theme as customTheme } from '../style'
import { NavBar, Footer } from '../components'

import 'normalize.css'

const MainContentContainer = styled.main`
  ${media.forSmallOnly`
    margin-top: ${props => props.theme.mobileHeaderHeight};
  `}
`

export const Layout = ({ location, children }) => {
  // eslint-disable-next-line no-undef
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <CalderaDigitalThemeProvider theme={customTheme}>
      <CalderaDigitalThemeConsumer>
        {theme => (
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <header>{<NavBar location={location} theme={theme} />}</header>
              <MainContentContainer>{children}</MainContentContainer>
              <Footer />
            </>
          </ThemeProvider>
        )}
      </CalderaDigitalThemeConsumer>
    </CalderaDigitalThemeProvider>
  )
}
