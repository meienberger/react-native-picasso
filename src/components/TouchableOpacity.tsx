import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TouchableOpacityProps {
  className: string
  theme: Theme
}

const PicassoTouchableOpacity: React.FC<CProps> = React.forwardRef(
  (props, ref: React.ForwardedRef<TouchableOpacity>) => {
    const { children, className = '', style, theme, ...others } = props
    const picassoStyle = buildStyleSheet(className, 'view', theme)

    return (
      <TouchableOpacity
        ref={ref}
        style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
        {...others}
      >
        {children}
      </TouchableOpacity>
    )
  },
)

PicassoTouchableOpacity.displayName = 'PicassoTouchableOpacity'

export default withTheme(PicassoTouchableOpacity)
