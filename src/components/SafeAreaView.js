import React from 'react'
import { SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'

const PicassoSafeView = React.forwardRef((props, ref) => {
  const { children, className = '', style, theme, ...others } = props
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return (
    <SafeAreaView
      ref={ref}
      style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
      {...others}
    >
      {children}
    </SafeAreaView>
  )
})

PicassoSafeView.displayName = 'PicassoSafeView'

PicassoSafeView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.any,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoSafeView)
