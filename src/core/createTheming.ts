import * as React from 'react'
import deepmerge from 'deepmerge'
import createThemeProvider from './createThemeProvider'
import createWithTheme from './createWithTheme'
import { Theme } from '../styles/defaultTheme'

export default function createTheming(defaultTheme: Theme): any {
  const ThemeContext = React.createContext(defaultTheme)

  const ThemeProvider = createThemeProvider(defaultTheme, ThemeContext)

  const withTheme = createWithTheme(ThemeContext)

  const useTheme = (overrides: object) => {
    const theme = React.useContext(ThemeContext)
    const result = React.useMemo(
      () =>
        theme && overrides ? deepmerge(theme, overrides) : theme || overrides,
      [theme, overrides],
    )

    return result
  }

  return {
    ThemeContext,
    ThemeProvider,
    withTheme,
    useTheme,
  }
}