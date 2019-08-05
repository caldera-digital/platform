import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui/index.ts'
import { theme } from '../../../style/theme'

export default {
  ...novelaTheme,
  initialColorMode: 'dark',

  colors: {
    ...novelaTheme.colors,
    // primary: theme.primaryColor,
    primary: '#000',
    secondary: theme.secondaryColor,
    accent: theme.secondaryColor,
  },
  fonts: {
    serif: theme.defaultFont,
    sansSerif: theme.defaultFont,
    monospace:
      '"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
  },
}
