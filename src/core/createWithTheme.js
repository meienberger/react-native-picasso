import * as React from 'react'
import deepmerge from 'deepmerge'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

const createWithTheme = (ThemeProvider, ThemeContext) =>
  function withTheme(Comp) {
    class ThemedComponent extends React.Component {
      _previous

      _merge = (a, b) => {
        const previous = this._previous

        if (previous && previous.a === a && previous.b === b) {
          return previous.result
        }

        const result = a && b && a !== b ? deepmerge(a, b) : a || b

        this._previous = { a, b, result }

        return result
      }

      render() {
        const { _reactThemeProviderForwardedRef, ...rest } = this.props

        return (
          <ThemeContext.Consumer>
            {(theme) => (
              <Comp
                {...rest}
                theme={this._merge(theme, rest.theme)}
                ref={_reactThemeProviderForwardedRef}
              />
            )}
          </ThemeContext.Consumer>
        )
      }
    }

    ThemedComponent.propTypes = {
      _reactThemeProviderForwardedRef: PropTypes.any,
      ...Comp.propTypes,
    }

    const ResultComponent = React.forwardRef((props, ref) => (
      <ThemedComponent {...props} _reactThemeProviderForwardedRef={ref} />
    ))

    ResultComponent.displayName = `withTheme(${Comp.displayName || Comp.name})`

    hoistNonReactStatics(ResultComponent, Comp)

    return ResultComponent
  }

export default createWithTheme
