import * as React from 'react'
import PropTypes from 'prop-types'

function createThemeProvider(defaultTheme, ThemeContext) {
  class ThemeProvider extends React.Component {
    static defaultProps = {
      theme: defaultTheme,
    }

    render() {
      return (
        <ThemeContext.Provider value={this.props.theme}>
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
