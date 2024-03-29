import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TouchableOpacityProps {
  className?: string
  children?: React.ReactNode
}

const PicassoTouchableOpacity = React.forwardRef<TouchableOpacity, CProps>(
  (props, ref) => {
    const { children, className = '', style, ...others } = props

    return (
      <ThemeContext.Consumer>
        {(theme: Theme) => {
          const picassoStyle = buildStyleSheet(className, theme, 'view')

          return (
            <TouchableOpacity
              ref={ref}
              style={[
                { borderColor: theme.colors?.border },
                picassoStyle,
                style,
              ]}
              {...others}
            >
              {children}
            </TouchableOpacity>
          )
        }}
      </ThemeContext.Consumer>
    )
  },
)

PicassoTouchableOpacity.displayName = 'PicassoTouchableOpacity'

export default PicassoTouchableOpacity
