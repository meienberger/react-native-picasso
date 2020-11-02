import * as React from 'react'
import deepmerge from 'deepmerge'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

const createWithTheme = (ThemeProvider, ThemeContext) => {
  const withTheme = (WrappedComponent) => {
    const Enhance = (props) => {
      let _previous

      const _merge = (a, b) => {
        const previous = _previous

        if (previous && previous.a === a && previous.b === b) {
          return previous.result
        }

        const result = a && b && a !== b ? deepmerge(a, b) : a || b

        _previous = { a, b, result }

        return result
      }

      const { _reactThemeProviderForwardedRef, ...rest } = props

      return (
        <ThemeContext.Consumer>
          {(theme) => (
            <WrappedComponent
              {...rest}
              theme={_merge(theme, rest.theme)}
              ref={_reactThemeProviderForwardedRef}
            />
          )}
        </ThemeContext.Consumer>
      )
    }

    Enhance.propTypes = {
      _reactThemeProviderForwardedRef: PropTypes.any,
      ...WrappedComponent.propTypes,
    }

    const ResultComponent = React.forwardRef((props, ref) => (
      <Enhance {...props} _reactThemeProviderForwardedRef={ref} />
    ))

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
