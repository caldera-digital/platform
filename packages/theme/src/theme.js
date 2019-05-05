import React from 'react'

const ThemeContext = React.createContext()

export const DEFAULT_THEME = {
  defaultFont: '"Helvetica Neue", Arial, "Noto Sans"',
  defaultFontColor: '#090728',
  defaultFontSize: '18px',
  defaultHeaderColor: '#333333',
  defaultHeaderFont: '"Helvetica Neue", Arial, "Noto Sans"',
  defaultInputBackgroundColor: '#f5f5f5',
  defaultMobileFontSize: '16px',
  defaultTransition: 'all 0.2s linear',
  desktopHeaderHeight: '80px',
  disabledColor: '#888888',
  errorColor: '#e44100',
  focusColor: '#4c9aff',
  grayText: '#959595',
  linkColor: '#2f74ce',
  maxContainerWidth: '1140px',
  mobileHeaderHeight: '60px',
  negativeColor: '#cc432a',
  positiveColor: '#52b74d',
  primaryColor: '#010628',
  white: '#ffffff',
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
