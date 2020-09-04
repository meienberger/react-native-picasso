/* eslint-disable newline-after-var */
import { StyleSheet } from 'react-native'
import { splitAndValidate } from './classname-helpers'
import { alignValues, flexValues, spacingProperties } from './constants'

const classesToStyle = (array, theme) => {
  let styles = {}

  array.forEach(({ property, value }) => {
    let values

    if (property === 'elevated') {
      styles = {
        ...styles,
        ...theme.elevated,
      }
    } else if (property === 'bg') {
      styles.backgroundColor = theme.colors[value]
    } else if (property === 'color') {
      styles.color = theme.textColors[value]
    } else if (property === 'size') {
      styles.fontSize = theme.font?.sized[value]
    } else if (property === 'weight') {
      styles.fontWeight = theme.font?.weights[value]
    } else if (property === 'align') {
      styles.textAlign = alignValues[value]
    } else if (property === 'flex') {
      styles.flexDirection = flexValues[value]
    } else if (property === 'radius') {
      styles.borderRadius = theme.radius[value]
    } else {
      // Getting values
      if (spacingProperties.includes(property[0])) {
        values = theme.spacing
      }

      let main = ''
      let side = ''

      if (property[0] === 'm') main = 'margin'
      else if (property[0] === 'p') main = 'padding'

      if (property[1] === 't') side = 'Top'
      else if (property[1] === 'b') side = 'Bottom'
      else if (property[1] === 'l') side = 'Left'
      else if (property[1] === 'r') side = 'Right'
      else if (property[1] === 'x') side = 'Horizontal'
      else if (property[1] === 'y') side = 'Vertical'

      styles[`${main}${side}`] = values[value]
    }
  })

  return styles
}

export const buildStyleSheet = (className, componentType = 'view', theme) => {
  const arrayClasses = splitAndValidate(className, componentType)
  const styles = StyleSheet.flatten(classesToStyle(arrayClasses, theme))

  return styles
}
