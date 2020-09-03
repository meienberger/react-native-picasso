import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoView = ({ children, className = '', style, theme }) => {
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return <View style={[picassoStyle, style]}>{children}</View>
}

PicassoView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoView)
