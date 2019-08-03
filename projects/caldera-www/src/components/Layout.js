import React from 'react'
import {
  CalderaDigitalThemeProvider,
  CalderaDigitalThemeConsumer,
  GlobalStyle,
} from '@caldera-digital/theme'
import { ThemeProvider } from 'styled-components'
import { theme as customTheme } from '../style'
import { NavBar } from '../components'

import 'normalize.css'

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
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with rrt{' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </>
          </ThemeProvider>
        )}
      </CalderaDigitalThemeConsumer>
    </CalderaDigitalThemeProvider>
  )
}
