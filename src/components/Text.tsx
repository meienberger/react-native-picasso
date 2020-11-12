import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { withTheme } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TextProps {
  className: string
  theme: Theme
}

const PicassoText: React.FC<CProps> = React.forwardRef(
  (props, ref: React.ForwardedRef<Text>) => {
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
  },
)

PicassoText.displayName = 'PicassoText'

export default withTheme(PicassoText)
