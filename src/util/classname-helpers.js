// const spacingValues = ['sm', 'md', 'lg', 'xl', 'xxl']
// const radiusValues = ['sm', 'md', 'lg', 'xl', 'xxl']
// const flexValues = ['row', 'column']
// const weightValues = ['bold', 'normal', 'light']
// const alignValues = ['left', 'right', 'center']

import { validPropertiesBase, validPropertiesForType } from './constants'

// export const validValuesForProperty = {
//   m: spacingValues,
//   mr: spacingValues,
//   ml: spacingValues,
//   mt: spacingValues,
//   mb: spacingValues,
//   mx: spacingValues,
//   my: spacingValues,
//   p: spacingValues,
//   pr: spacingValues,
//   pl: spacingValues,
//   pt: spacingValues,
//   pb: spacingValues,
//   px: spacingValues,
//   py: spacingValues,
//   radius: radiusValues,
//   flex: flexValues,
//   weight: weightValues,
//   align: alignValues,
// }

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
