import * as React from 'react'
import { View, ViewProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className?: string
}

const PicassoView: React.FC<CProps> = (props) => {
  const CustomView = React.forwardRef<View, CProps>((props, ref) => {
    const { children, className = '', style, ...others } = props

    return (
      <ThemeContext.Consumer>
        {(theme: Theme) => {
          const picassoStyle = buildStyleSheet(className, 'view', theme)

          return (
            <View
              ref={ref}
              style={[
                { borderColor: theme.colors?.border },
                picassoStyle,
                style,
              ]}
              {...others}
            >
              {children}
            </View>
          )
        }}
      </ThemeContext.Consumer>
    )
  })

  return <CustomView {...props} />
}

PicassoView.displayName = 'PicassoView'

export default PicassoView
