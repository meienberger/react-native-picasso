interface BackgroundColors {
  background?: string
  primary?: string
  secondary?: string
  border?: string
  [x: string]: any
}

interface TextColors {
  primary?: string
  secondary?: string
  white?: string
  [x: string]: any
}

interface Sizes {
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  [x: string]: any
}

interface Weights {
  light?: string
  normal?: string
  bold?: string
  extrabold?: string
  [x: string]: any
}

interface Font {
  family?: string
  sizes?: Sizes
  weights?: Weights
}

interface Radius extends Sizes {
  round?: number
  [x: string]: any
}

export interface Theme {
  colors?: BackgroundColors
  textColors?: TextColors
  font?: Font
  elevated?: object
  radius?: Radius
  spacing?: Sizes
  [x: string]: any
}

export const defaultTheme: Theme = {
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
    xxl: 80,
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
