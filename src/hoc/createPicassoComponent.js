/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { withTheme } from '../core/theming'
import { buildStyleSheet } from '../util/style-helpers'

export default function createPicassoComponent(WrappedComponent) {
  const EnhancedComponent = React.forwardRef((props, ref) => {
    const { className = '', theme, style, ...other } = props
    const picassoStyle = buildStyleSheet(className, 'custom', theme)

    return (
      <WrappedComponent
        ref={ref}
        style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
        {...other}
      />
    )
  })

  const FinalComponent = hoistNonReactStatics(
    EnhancedComponent,
    WrappedComponent,
  )

  EnhancedComponent.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    style: PropTypes.any,
  }

  return withTheme(FinalComponent)
}
