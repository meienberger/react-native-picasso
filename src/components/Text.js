import React from 'react'
import { Text, StyleSheet, TextPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoText = React.forwardRef((props, ref) => {
  const { children, className = '', style, theme, ...others } = props

  const picassoStyle = buildStyleSheet(className, 'text', theme)

  return (
    <Text
      ref={ref}
      style={StyleSheet.flatten([
        { fontFamily: theme.font?.family, color: theme?.textColors?.primary },
        picassoStyle,
        style,
      ])}
      {...others}
    >
      {children}
    </Text>
  )
})

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
  ...TextPropTypes,
}

PicassoText.displayName = 'PicassoText'
PicassoText.propTypes = propTypes

export default withTheme(PicassoText)
