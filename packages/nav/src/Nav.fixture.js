import React from 'react'
import { Nav } from './Nav'
import {
  CalderaDigitalThemeProvider,
  CalderaDigitalThemeConsumer,
} from '@caldera-digital/theme'
import { ThemeProvider } from 'styled-components'

export default (
  <CalderaDigitalThemeProvider>
    <CalderaDigitalThemeConsumer>
      {theme => (
        <ThemeProvider theme={theme}>
          <Nav
            routes={[
              {
                route: '/faq',
                text: 'div',
                as: 'div',
                onClick: data => console.log('on click called', data),
                anotherProp: 'anotherProp',
              },
              {
                route: '/anchor',
                text: 'anchor',
                as: 'a',
              },
              {
                route: '/selected',
                text: 'selected',
                as: 'a',
                selected: true,
              },
            ]}
            renderLeftSection={() => <div>hello</div>}
            containerClassName="testClassName"
          />
        </ThemeProvider>
      )}
    </CalderaDigitalThemeConsumer>
  </CalderaDigitalThemeProvider>
)
