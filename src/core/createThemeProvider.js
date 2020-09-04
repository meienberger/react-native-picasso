import * as React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'

function createThemeProvider(defaultTheme, ThemeContext) {
  class ThemeProvider extends React.Component {
    static defaultProps = {
      theme: defaultTheme,
    }

    render() {
      return (
        <ThemeContext.Provider
          value={deepmerge(defaultTheme, this.props.theme)}
        >
          {this.props.children}
        </ThemeContext.Provider>
      )
    }
  }

  ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  return ThemeProvider
}

export default createThemeProvider
