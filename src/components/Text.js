import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoText = (props) => {
  const { children, className = '', style, theme } = props

  const picassoStyle = buildStyleSheet(className, 'text', theme)

  // console.log([picassoStyle, style])
  // console.log(StyleSheet.flatten([picassoStyle, style]))

  return (
    <Text style={StyleSheet.flatten([picassoStyle, style])}>{children}</Text>
  )
}

PicassoText.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoText)
