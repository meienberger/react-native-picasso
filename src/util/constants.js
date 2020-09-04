export const spacingProperties = ['m', 'p']

export const alignValues = {
  center: 'center',
  left: 'left',
  right: 'right',
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
const validPropertiesView = ['elevated', 'radius', 'bg']
const validPropertiesText = ['weight', 'align', 'color', 'size']

export const validPropertiesForType = {
  view: validPropertiesView,
  text: validPropertiesText,
}
