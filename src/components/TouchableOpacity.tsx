import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TouchableOpacityProps {
  className?: string
}

const PicassoTouchableOpacity: React.FC<CProps> = (props) => {
  const CustomTouchable = React.forwardRef<TouchableOpacity, CProps>(
    (props, ref) => {
      const { children, className = '', style, ...others } = props

      return (
        <ThemeContext.Consumer>
          {(theme: Theme) => {
            const picassoStyle = buildStyleSheet(className, 'view', theme)

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

  return <CustomTouchable {...props} />
}

PicassoTouchableOpacity.displayName = 'PicassoTouchableOpacity'

export default PicassoTouchableOpacity
