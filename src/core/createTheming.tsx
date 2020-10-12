import * as React from 'react'
import deepmerge from 'deepmerge'
import createThemeProvider from './createThemeProvider'
import createWithTheme from './createWithTheme'
import { ThemeInterface } from '../styles/defaultTheme'

export default function createTheming(defaultTheme: ThemeInterface) {
  const ThemeContext = React.createContext(defaultTheme)

  const ThemeProvider = createThemeProvider(defaultTheme, ThemeContext)

  const withTheme = createWithTheme(ThemeProvider, ThemeContext)

  const useTheme = (overrides: boolean) => {
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
