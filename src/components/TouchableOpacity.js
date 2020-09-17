import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoTouchableOpacity = ({
  children,
  className = '',
  style,
  theme,
  ...others
}) => {
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return (
    <TouchableOpacity
      style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
      {...others}
    >
      {children}
    </TouchableOpacity>
  )
}

PicassoTouchableOpacity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoTouchableOpacity)
