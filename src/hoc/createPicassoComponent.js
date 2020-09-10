/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../core/theming'
import { buildStyleSheet } from '../util/style-helpers'

export default function createPicassoComponent(WrappedComponent) {
  const EnhancedComponent = class extends React.Component {
    render() {
      const { className = '', theme, style, ...other } = this.props
      const picassoStyle = buildStyleSheet(className, 'custom', theme)

      return <WrappedComponent style={[picassoStyle, style]} {...other} />
    }
  }

  EnhancedComponent.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    style: PropTypes.object,
  }

  return withTheme(EnhancedComponent)
}
