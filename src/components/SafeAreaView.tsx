import React from 'react'
import { SafeAreaView } from 'react-native'
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

const PicassoSafeView = ({
  children,
  className = '',
  style,
  theme,
  ...others
}: Props) => {
  const picassoStyle = buildStyleSheet(className, 'view', theme)

  return (
    <SafeAreaView
      style={[{ borderColor: theme.colors?.border }, picassoStyle, style]}
      {...others}
    >
      {children}
    </SafeAreaView>
  )
}

PicassoSafeView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withTheme(PicassoSafeView)
