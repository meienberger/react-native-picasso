export const spacingProperties = [
  'm',
  'mr',
  'ml',
  'mt',
  'mb',
  'mx',
  'my',
  'p',
  'pr',
  'pl',
  'pt',
  'pb',
  'px',
  'py',
]

export const alignValues = {
  center: 'center',
  left: 'left',
  right: 'right',
}

export const alignItemsValues = {
  center: 'center',
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
}

export const flexValues = {
  row: 'row',
  column: 'column',
}

export const validPropertiesBase = [...spacingProperties, 'flex', 'alignself']
const validPropertiesView = [
  'elevated',
  'radius',
  'bg',
  'alignitems',
  'justifycontent',
]
const validPropertiesText = ['weight', 'align', 'color', 'size']

export const validPropertiesForType = {
  view: validPropertiesView,
  text: validPropertiesText,
  custom: [...validPropertiesView, ...validPropertiesText],
}
