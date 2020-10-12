import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'
import { ThemeInterface } from '../styles/defaultTheme'

interface Props {
  className: string
  children: any
  style: Object
  theme: ThemeInterface
}

const PicassoTouchableOpacity = ({
  children,
  className = '',
  style,
  theme,
  ...others
}: Props) => {
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
