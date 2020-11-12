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

export const borderWidthProperties = ['b', 'bl', 'br', 'bt', 'bb']

export const alignValues: Record<string, string> = {
  center: 'center',
  left: 'left',
  right: 'right',
  justify: 'justify',
}

export const alignItemsValues: Record<string, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

export const flexValues: Record<string, string> = {
  row: 'row',
  column: 'column',
}

export const validPropertiesBase = [...spacingProperties, 'flex', 'alignself']
const validPropertiesView = [
  'elevated',
  'radius',
  'radiustl',
  'radiustr',
  'radiusbl',
  'radiusbr',
  'bg',
  'alignitems',
  'justifycontent',
  'bordercolor',
  ...borderWidthProperties,
]
const validPropertiesText = ['weight', 'align', 'color', 'size']

export const validPropertiesForType = {
  view: validPropertiesView,
  text: validPropertiesText,
  custom: [...validPropertiesView, ...validPropertiesText],
}

export const PROPERTIES = {
  BACKGROUND: 'bg',
  COLOR: 'color',
  FONT_SIZE: 'size',
  FONT_WEIGHT: 'weight',
  ALIGN_ITEMS: 'alignitems',
  JUSTIFY_CONTENT: 'justifycontent',
  ALIGN_SELF: 'alignself',
  TEXT_ALIGN: 'align',
  FLEX: 'flex',
  BORDER_RADIUS: 'radius',
  BORDER_RADIUS_TOP_LEFT: 'radiustl',
  BORDER_RADIUS_TOP_RIGHT: 'radiustr',
  BORDER_RADIUS_BOTTOM_LEFT: 'radiusbl',
  BORDER_RADIUS_BOTTOM_RIGHT: 'radiusbr',
  BORDER_COLOR: 'bordercolor',
}
