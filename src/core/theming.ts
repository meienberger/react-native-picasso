import createTheming from './createTheming'
import { defaultTheme } from '../styles/defaultTheme'

export const {
  ThemeProvider,
  withTheme,
  useTheme,
  ThemeContext,
} = createTheming(defaultTheme)
