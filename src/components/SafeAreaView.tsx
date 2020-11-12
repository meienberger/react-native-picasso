import React from 'react'
import { SafeAreaView, ViewProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className: string
  theme: Theme
}

const PicassoSafeView: React.FC<CProps> = React.forwardRef(
  (props, ref: React.ForwardedRef<SafeAreaView>) => {
    const { children, className = '', style, theme, ...others } = props
    const picassoStyle = buildStyleSheet(className, 'view', theme)

    return (
      <SafeAreaView
        ref={ref}
        style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
        {...others}
      >
        {children}
      </SafeAreaView>
    )
  },
)

PicassoSafeView.displayName = 'PicassoSafeView'

export default withTheme(PicassoSafeView)
