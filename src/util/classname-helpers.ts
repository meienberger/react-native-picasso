import { Theme } from '../styles/defaultTheme'
import { validPropertiesBase, validPropertiesForType } from './constants'

export interface PropertyValue {
  property: string
  value: string
}

/**
 * Splits the classname and return an array of
 * valid picasso class types
 * @param {String} classname
 */
export const splitAndValidate = (
  classname: string,
  componentType: 'view' | 'text' | 'custom',
  theme: Theme,
): PropertyValue[] => {
  const validProperties: string[] = [
    ...validPropertiesBase,
    ...validPropertiesForType[componentType],
    ...Object.keys(theme),
  ]

  const split = classname.split(' ')

  return split
    .map((declaration) => {
      const [property, value] = declaration.split('-')

      if (validProperties.includes(property)) {
        const final: PropertyValue = { property, value }
        return final
      }

      return { property: '', value: '' }
    })
    .filter(Boolean)
}
