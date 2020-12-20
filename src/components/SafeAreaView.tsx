import * as React from 'react'
import { SafeAreaView, ViewProps } from 'react-native'
import { buildStyleSheet } from '../util/style-helpers'
import { ThemeContext, withTheme } from '../core/theming'
import { Theme } from '../styles/defaultTheme'

interface CProps extends ViewProps {
  className?: string
}

const PicassoSafeView: React.FC<CProps> = (props) => {
  const CustomSafeView = React.forwardRef<SafeAreaView, CProps>(
    (props, ref) => {
      const { children, className = '', style, ...others } = props

      return (
        <ThemeContext.Consumer>
          {(theme: Theme) => {
            const picassoStyle = buildStyleSheet(className, 'view', theme)

            return (
              <SafeAreaView
                ref={ref}
                style={[
                  { borderColor: theme.colors?.border },
                  picassoStyle,
                  style,
                ]}
                {...others}
              >
                {children}
              </SafeAreaView>
            )
          }}
        </ThemeContext.Consumer>
      )
    },
  )

  return <CustomSafeView {...props} />
}

PicassoSafeView.displayName = 'PicassoSafeView'

export default PicassoSafeView
