import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoView = React.forwardRef((props, ref) => {
  const { children, className = '', style, theme, ...others } = props
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return (
    <View
      ref={ref}
      style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
      {...others}
    >
      {children}
    </View>
  )
})

PicassoView.displayName = 'PicassoView'

PicassoView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoView)
