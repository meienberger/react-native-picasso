import * as React from 'react'
import { StyleSheet, TextInputProps, TextInput } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends TextInputProps {
  className?: string
  children?: React.ReactNode
}

const PicassoText = React.forwardRef<TextInput, CProps>((props, ref) => {
  const { children, className = '', style, ...others } = props

  return (
    <ThemeContext.Consumer>
      {(theme: Theme) => {
        const picassoStyle = buildStyleSheet(className, theme, 'custom')

        return (
          <TextInput
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
          </TextInput>
        )
      }}
    </ThemeContext.Consumer>
  )
})

PicassoText.displayName = 'PicassoText'

export default PicassoText
