/* eslint-disable newline-after-var */
import { StyleSheet } from 'react-native'
import { Theme } from '../styles/defaultTheme'
import { splitAndValidate } from './classname-helpers'
import {
  alignValues,
  flexValues,
  spacingProperties,
  alignItemsValues,
  PROPERTIES,
  borderWidthProperties,
  fontStyleValues,
} from './constants'

interface PropertyValue {
  property: string
  value: string
}

const getSide = (value: string) => {
  let side = ''

  if (value === 't') side = 'Top'
  else if (value === 'b') side = 'Bottom'
  else if (value === 'l') side = 'Left'
  else if (value === 'r') side = 'Right'
  else if (value === 'x') side = 'Horizontal'
  else if (value === 'y') side = 'Vertical'

  return side
}

const classesToStyle = (array: PropertyValue[], theme: Record<string, any>) => {
  let styles: Record<string, any> = {}

  array.forEach(({ property, value }) => {
    switch (property.toLowerCase()) {
      case PROPERTIES.BACKGROUND:
        styles.backgroundColor = theme.colors[value]
        break
      case PROPERTIES.COLOR:
      case PROPERTIES.COLOR_SHORT:
        styles.color = theme.textColors[value]
        break
      case PROPERTIES.FONT_SIZE:
      case PROPERTIES.FONT_SIZE_SHORT:
        styles.fontSize = theme.font?.sizes?.[value]
        break
      case PROPERTIES.FONT_WEIGHT:
      case PROPERTIES.FONT_WEIGHT_SHORT:
        styles.fontWeight = theme.font?.weights?.[value]
        break
      case PROPERTIES.ALIGN_ITEMS:
      case PROPERTIES.ALIGN_ITEMS_SHORT:
        styles.alignItems = alignItemsValues[value]
        break
      case PROPERTIES.JUSTIFY_CONTENT:
      case PROPERTIES.JUSTIFY_CONTENT_SHORT:
        styles.justifyContent = alignItemsValues[value]
        break
      case PROPERTIES.ALIGN_SELF:
      case PROPERTIES.ALIGN_SELF_SHORT:
        styles.alignSelf = alignItemsValues[value]
        break
      case PROPERTIES.TEXT_ALIGN:
      case PROPERTIES.TEXT_ALIGN_SHORT:
        styles.textAlign = alignValues[value]
        break
      case PROPERTIES.FLEX:
      case PROPERTIES.FLEX_SHORT:
        if (flexValues[value]) {
          styles.flexDirection = flexValues[value]
        } else if (!Number.isNaN(Number(value))) {
          styles.flex = Number(value)
        }
        break
      case PROPERTIES.BORDER_RADIUS:
      case PROPERTIES.BORDER_RADIUS_SHORT:
        styles.borderRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_BOTTOM_LEFT:
      case PROPERTIES.BORDER_RADIUS_BOTTOM_LEFT_SHORT:
        styles.borderBottomLeftRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_BOTTOM_RIGHT:
      case PROPERTIES.BORDER_RADIUS_BOTTOM_RIGHT_SHORT:
        styles.borderBottomRightRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_TOP_LEFT:
      case PROPERTIES.BORDER_RADIUS_TOP_LEFT_SHORT:
        styles.borderTopLeftRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_RADIUS_TOP_RIGHT:
      case PROPERTIES.BORDER_RADIUS_TOP_RIGHT_SHORT:
        styles.borderTopRightRadius = theme.radius?.[value]
        break
      case PROPERTIES.BORDER_COLOR:
      case PROPERTIES.BORDER_COLOR_SHORT:
        styles.borderColor = theme.colors?.[value]
        break
      case PROPERTIES.FONT_STYLE:
      case PROPERTIES.FONT_STYLE_SHORT:
        styles.fontStyle = fontStyleValues[value]
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
          const prop: string = property[1]
          const side = getSide(prop)

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

export const buildStyleSheet = (
  className: string,
  theme: Theme,
  componentType: 'custom' | 'view' | 'text' = 'custom',
) => {
  const arrayClasses = splitAndValidate(className, componentType, theme)
  return StyleSheet.flatten(classesToStyle(arrayClasses, theme))
}
