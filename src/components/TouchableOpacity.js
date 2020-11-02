import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoTouchableOpacity = React.forwardRef((props, ref) => {
  const { children, className = '', style, theme, ...others } = props
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return (
    <TouchableOpacity
      ref={ref}
      style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
      {...others}
    >
      {children}
    </TouchableOpacity>
  )
})

PicassoTouchableOpacity.displayName = 'PicassoTouchableOpacity'

PicassoTouchableOpacity.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.any,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoTouchableOpacity)
