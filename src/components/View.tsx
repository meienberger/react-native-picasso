import React from 'react'
import { View, ViewProps } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className: string
  theme: Theme
}

const PicassoView: React.FC<CProps> = React.forwardRef(
  (props, ref: React.ForwardedRef<View>) => {
    const { children, className = '', style, theme, ...others } = props
    const picassoStyle = buildStyleSheet(className, 'view', theme)

    return (
      <View
        ref={ref}
        style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
        {...others}
      >
        {children}
      </View>
    )
  },
)

PicassoView.displayName = 'PicassoView'

export default withTheme(PicassoView)
