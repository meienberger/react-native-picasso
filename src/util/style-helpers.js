/* eslint-disable newline-after-var */
import { StyleSheet } from 'react-native'
import { splitAndValidate } from './classname-helpers'
import {
  alignValues,
  flexValues,
  spacingProperties,
  alignItemsValues,
  PROPERTIES,
} from './constants'

const classesToStyle = (array, theme) => {
  let styles = {}

  array.forEach(({ property, value }) => {
    switch (property.toLowerCase()) {
      case PROPERTIES.BACKGROUND:
        styles.backgroundColor = theme.colors?.[value]
        break
      case PROPERTIES.COLOR:
        styles.color = theme.textColors[value]
        break
      case PROPERTIES.FONT_SIZE:
        styles.fontSize = theme.font?.sizes?.[value]
        break
      case PROPERTIES.FONT_WEIGHT:
        styles.fontWeight = theme.font?.weights?.[value]
        break
      case PROPERTIES.ALIGN_ITEMS:
        styles.alignItems = alignItemsValues[value]
        break
      case PROPERTIES.JUSTIFY_CONTENT:
        styles.justifyContent = alignItemsValues[value]
        break
      case PROPERTIES.ALIGN_SELF:
        styles.alignSelf = alignItemsValues[value]
        break
      case PROPERTIES.TEXT_ALIGN:
        styles.textAlign = alignValues[value]
        break
      case PROPERTIES.FLEX:
        if (flexValues[value]) {
          styles.flexDirection = flexValues[value]
        } else if (!Number.isNaN(Number(value))) {
          styles.flex = Number(value)
        }
        break
      case PROPERTIES.BORDER_RADIUS:
        styles.borderRadius = theme.radius?.[value]
        break
      default:
        if (spacingProperties.includes(property.toLowerCase())) {
          const values = theme.spacing
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
        // Custom root values like elevated
        else {
          styles = {
            ...styles,
            ...theme[property],
          }
        }
    }
  })

  return styles
}

export const buildStyleSheet = (className, componentType = 'custom', theme) => {
  const arrayClasses = splitAndValidate(className, componentType, theme)
  const styles = StyleSheet.flatten(classesToStyle(arrayClasses, theme))

  return styles
}
