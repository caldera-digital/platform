import React from 'react'

const ThemeContext = React.createContext()

export const DEFAULT_THEME = {
  defaultHeaderColor: '#333333',
  disabledColor: '#888888',
  grayText: '#959595',
  desktopHeaderHeight: '80px',
  focusColor: '#4c9aff',
  linkColor: '#2f74ce',
  errorColor: '#e44100',
  negativeColor: '#cc432a',
  positiveColor: '#52b74d',
  defaultInputBackgroundColor: '#f5f5f5',
  mobileHeaderHeight: '60px',
  defaultFontColor: '#090728',
  primaryColor: '#010628',
  defaultFont: '"Helvetica Neue", Arial, "Noto Sans"',
  white: '#ffffff',
  defaultHeaderFontColor: '#090728',
  defaultTransition: 'all 0.2s linear',
  defaultFontSize: '18px',
  defaultMobileFontSize: '16px',
}

export const CalderaDigitalThemeProvider = ({ theme = {}, children }) => (
  <ThemeContext.Provider value={{ ...DEFAULT_THEME, ...theme }}>
    {children}
  </ThemeContext.Provider>
)

export const CalderaDigitalThemeConsumer = ThemeContext.Consumer

export const getTheme = Component =>
  class GetTheme extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <Component {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      )
    }
  }
