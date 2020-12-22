import * as React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TextProps {
  className?: string
  children?: React.ReactNode
}

const PicassoText = React.forwardRef<Text, CProps>((props, ref) => {
  const { children, className = '', style, ...others } = props

  return (
    <ThemeContext.Consumer>
      {(theme: Theme) => {
        const picassoStyle = buildStyleSheet(className, 'text', theme)

        return (
          <Text
            ref={ref}
            style={StyleSheet.flatten([
              {
                fontFamily: theme.font?.family,
                color: theme?.textColors?.primary,
              },
              picassoStyle,
              style,
            ])}
            {...others}
          >
            {children}
          </Text>
        )
      }}
    </ThemeContext.Consumer>
  )
})

PicassoText.displayName = 'PicassoText'

export default PicassoText
