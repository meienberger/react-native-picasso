import { validPropertiesBase, validPropertiesForType } from './constants'

/**
 * Splits the classname and return an array of
 * valid picasso class types
 * @param {String} classname
 */
export const splitAndValidate = (classname, componentType) => {
  const validProperties = [
    ...validPropertiesBase,
    ...validPropertiesForType[componentType],
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
