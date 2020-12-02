/* eslint-disable react/display-name */
import * as React from 'react'
import { StyleSheet } from 'react-native'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { ThemeContext } from '../core/theming'
import { buildStyleSheet } from '../util/style-helpers'
import { ViewProps } from 'react-native'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className?: string
}

const createPicassoComponent = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const EnhancedComponent = React.forwardRef<unknown, P & CProps>(
    (props, ref) => {
      const { children, className = '', style, ...others } = props

      return (
        <ThemeContext.Consumer>
          {(theme: Theme) => {
            const picassoStyle = buildStyleSheet(className, 'custom', theme)

            return (
              <WrappedComponent
                ref={ref}
                style={StyleSheet.flatten([
                  { borderColor: theme.colors?.border },
                  picassoStyle,
                  style,
                ])}
                {...(others as P)}
              >
                {children}
              </WrappedComponent>
            )
          }}
        </ThemeContext.Consumer>
      )
    },
  )

  const FinalComponent = hoistNonReactStatics(
    EnhancedComponent,
    WrappedComponent,
  )

  return FinalComponent
}

export default createPicassoComponent
