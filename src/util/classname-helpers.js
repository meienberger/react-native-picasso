import { validPropertiesBase, validPropertiesForType } from './constants'

/**
 * Splits the classname and return an array of
 * valid picasso class types
 * @param {String} classname
 */
export const splitAndValidate = (classname, componentType, theme) => {
  const validProperties = [
    ...validPropertiesBase,
    ...validPropertiesForType[componentType],
    ...Object.keys(theme),
  ]

  const split = classname.split(' ')

  const valid = split
    .map((declaration) => {
      const [property, value] = declaration.split('-')

      if (validProperties.includes(property)) {
        return { property, value }
      }

      return null
    })
    .filter(Boolean)

  return valid
}
