import React from 'react'
import { SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoSafeView = ({ children, className = '', style, theme }) => {
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return <SafeAreaView style={[picassoStyle, style]}>{children}</SafeAreaView>
}

PicassoSafeView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoSafeView)
