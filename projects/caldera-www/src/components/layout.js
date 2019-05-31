import React from 'react'
import { Link } from 'gatsby'
import {
  CalderaDigitalThemeProvider,
  CalderaDigitalThemeConsumer,
  GlobalStyle,
} from '@caldera-digital/theme'
import { ThemeProvider } from 'styled-components'
import { theme as customTheme } from '../style'
import { NavBar } from '../components'

import 'normalize.css'

export class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <CalderaDigitalThemeProvider theme={customTheme}>
        <CalderaDigitalThemeConsumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <div>
                <GlobalStyle />
                <header>{<NavBar location={location} />}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with rrt{' '}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </div>
            </ThemeProvider>
          )}
        </CalderaDigitalThemeConsumer>
      </CalderaDigitalThemeProvider>
    )
  }
}
