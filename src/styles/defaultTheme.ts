interface Colors {
  background: string
  primary: string
  secondary: string
  border: string
}

interface TextColors {
  primary: string
  secondary: string
  white: string
}

interface FontSizes {
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

interface FontWeights {
  light: string
  normal: string
  bold: string
  extrabold: string
}

interface Font {
  family: string
  sizes: FontSizes
  weights: FontWeights
}

export interface ThemeInterface {
  colors: Colors
  textColors: TextColors
  font: Font
  elevated: Object
  radius: Object
  spacing: Object
}

export const defaultTheme: ThemeInterface = {
  colors: {
    background: '#eeeeee',
    primary: '#00B386',
    secondary: '#dedede',
    border: '#d3d3d3',
  },
  textColors: {
    primary: '#333333',
    secondary: '#666666',
    white: '#ffffff',
  },
  font: {
    family: 'Helvetica',
    sizes: {
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 40,
    },
    weights: {
      light: '100',
      normal: 'normal',
      bold: 'bold',
      extrabold: '800',
    },
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  radius: {
    sm: 5,
    md: 10,
    lg: 20,
    xl: 40,
    round: 1000,
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
}
