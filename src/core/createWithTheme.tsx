import * as React from 'react'
import deepmerge from 'deepmerge'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Theme } from '../styles/defaultTheme'
import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native'

interface CProps extends TouchableOpacityProps {
  className?: string
  theme: Theme
  ref: React.ForwardedRef<any>
}

const createWithTheme = (ThemeContext: React.Context<Theme>) => {
  const withTheme = (WrappedComponent: React.FC<any>) => {
    const Enhance: React.FC<CProps> = (props) => {
      let _previous: any

      const _merge = (a: object, b: Theme) => {
        const previous = _previous

        if (previous && previous.a === a && previous.b === b) {
          return previous.result
        }

        const result = a && b && a !== b ? deepmerge(a, b) : a || b

        _previous = { a, b, result }

        return result
      }

      const { ref, ...rest } = props

      return (
        <ThemeContext.Consumer>
          {(theme: Theme) => (
            <WrappedComponent
              {...rest}
              theme={_merge(theme, rest.theme)}
              ref={ref}
            />
          )}
        </ThemeContext.Consumer>
      )
    }

    const ResultComponent = React.forwardRef(
      (props: CProps, ref: React.ForwardedRef<any>) => (
        <Enhance {...props} theme={props.theme} ref={ref} />
      ),
    )

    ResultComponent.displayName = `withTheme(${
      WrappedComponent.displayName || WrappedComponent.name
    })`

    const FinalComponent = hoistNonReactStatics(
      ResultComponent,
      WrappedComponent,
    )

    return FinalComponent
  }

  return withTheme
}

export default createWithTheme
