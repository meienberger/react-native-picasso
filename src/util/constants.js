export const spacingProperties = ['m', 'p']

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

export const validPropertiesBase = [
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
  'flex',
]
const validPropertiesView = [
  'elevated',
  'radius',
  'bg',
  'alignself',
  'alignitems',
  'justifycontent',
]
const validPropertiesText = ['weight', 'align', 'color', 'size']

export const validPropertiesForType = {
  view: validPropertiesView,
  text: validPropertiesText,
}
