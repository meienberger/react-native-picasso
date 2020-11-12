import * as React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { Theme } from '../styles/defaultTheme'
import { TextProps, ViewProps } from 'react-native'

interface Props {
  theme: Theme
}

function createThemeProvider(
  defaultTheme: Theme,
  ThemeContext: React.Context<Theme>,
) {
  const ThemeProvider: React.FC<Props> = (props) => {
    return (
      <ThemeContext.Provider value={deepmerge(defaultTheme, props.theme)}>
        {props.children}
      </ThemeContext.Provider>
    )
  }

  return ThemeProvider
}

export default createThemeProvider
