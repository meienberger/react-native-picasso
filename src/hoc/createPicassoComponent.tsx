/* eslint-disable react/display-name */
import * as React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { withTheme } from '../core/theming'
import { buildStyleSheet } from '../util/style-helpers'
import { ViewProps } from 'react-native'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className: string
  theme: Theme
}

export default function createPicassoComponent(WrappedComponent: any) {
  const EnhancedComponent: React.FC<CProps> = React.forwardRef(
    (props, ref: React.ForwardedRef<any>) => {
      const { className = '', theme, style, ...other } = props
      const picassoStyle = buildStyleSheet(className, 'custom', theme)

      return (
        <WrappedComponent
          ref={ref}
          style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
          {...other}
        />
      )
    },
  )

  const FinalComponent = hoistNonReactStatics(
    EnhancedComponent,
    WrappedComponent,
  )

  return withTheme(FinalComponent)
}
