import { createTheming } from '@callstack/react-theme-provider'
import { defaultTheme } from '../styles/defaultTheme'

export const { ThemeProvider, withTheme, useTheme } = createTheming(
  defaultTheme,
)
