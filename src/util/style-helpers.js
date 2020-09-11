/* eslint-disable newline-after-var */
import { StyleSheet } from 'react-native'
import { splitAndValidate } from './classname-helpers'
import {
  alignValues,
  flexValues,
  spacingProperties,
  alignItemsValues,
  PROPERTIES,
  borderWidthProperties,
} from './constants'

const getSide = (value) => {
  let side = ''

  if (value === 't') side = 'Top'
  else if (value === 'b') side = 'Bottom'
  else if (value === 'l') side = 'Left'
  else if (value === 'r') side = 'Right'
  else if (value === 'x') side = 'Horizontal'
  else if (value === 'y') side = 'Vertical'

  return side
}

const classesToStyle = (array, theme) => {
  let styles = {
    // borderWidth: 0,
    // borderColor: theme.colors.borderColor,
  }

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
      case PROPERTIES.BORDER_RADIUS_BOTTOM_LEFT:
        styles.borderBottomLeftRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_BOTTOM_RIGHT:
        styles.borderBottomRightRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_TOP_LEFT:
        styles.borderTopLeftRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_TOP_RIGHT:
        styles.borderTopRightRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_COLOR:
        styles.borderColor = theme.colors?.[value]
        break
      default:
        if (spacingProperties.includes(property.toLowerCase())) {
          const values = theme.spacing
          let main = ''
          const side = getSide(property[1])

          if (property[0] === 'm') main = 'margin'
          else if (property[0] === 'p') main = 'padding'

          styles[`${main}${side}`] = values[value]
        } else if (borderWidthProperties.includes(property.toLowerCase())) {
          const side = getSide(property[1])

          if (!Number.isNaN(Number(value))) {
            styles[`border${side}Width`] = Number(value)
          }
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
