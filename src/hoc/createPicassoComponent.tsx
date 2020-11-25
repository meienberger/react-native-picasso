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

const createPicassoComponent = function (WrappedComponent: React.FC<any>) {
  const EnhancedComponent: React.FC<CProps> = React.forwardRef(
    (props, ref: React.ForwardedRef<any>) => {
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
                {...others}
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

  return <FinalComponent />
}

export default createPicassoComponent
