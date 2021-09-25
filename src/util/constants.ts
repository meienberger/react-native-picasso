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
  c: 'center',
  l: 'left',
  r: 'right',
  j: 'justify',
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
  c: 'center',
  fs: 'flex-start',
  fe: 'flex-end',
  ba: 'baseline',
  sb: 'space-between',
  sa: 'space-around',
  se: 'space-evenly',
}

export const fontStyleValues: Record<string, string> = {
  normal: 'normal',
  italic: 'italic',
  n: 'normal',
  i: 'italic',
}

export const flexValues: Record<string, string> = {
  row: 'row',
  column: 'column',
  r: 'row',
  c: 'column',
}

export const validPropertiesBase = [
  ...spacingProperties,
  'flex',
  'f',
  'alignself',
  'as',
]
const validPropertiesView = [
  'elevated',
  'radius',
  'r',
  'radiustl',
  'rtl',
  'radiustr',
  'rtr',
  'radiusbl',
  'rbl',
  'radiusbr',
  'rbr',
  'bg',
  'alignitems',
  'ai',
  'justifycontent',
  'jc',
  'bordercolor',
  'bc',
  ...borderWidthProperties,
]
const validPropertiesText = [
  'weight',
  'w',
  'align',
  'a',
  'color',
  'c',
  'size',
  's',
  'fontstyle',
  'fs',
]

export const validPropertiesForType = {
  view: validPropertiesView,
  text: validPropertiesText,
  custom: [...validPropertiesView, ...validPropertiesText],
}

export const PROPERTIES = {
  BACKGROUND: 'bg',
  COLOR: 'color',
  COLOR_SHORT: 'c',
  FONT_SIZE: 'size',
  FONT_SIZE_SHORT: 's',
  FONT_WEIGHT: 'weight',
  FONT_WEIGHT_SHORT: 'w',
  FONT_STYLE: 'fontstyle',
  FONT_STYLE_SHORT: 'fs',
  ALIGN_ITEMS: 'alignitems',
  ALIGN_ITEMS_SHORT: 'ai',
  JUSTIFY_CONTENT: 'justifycontent',
  JUSTIFY_CONTENT_SHORT: 'jc',
  ALIGN_SELF: 'alignself',
  ALIGN_SELF_SHORT: 'as',
  TEXT_ALIGN: 'align',
  TEXT_ALIGN_SHORT: 'a',
  FLEX: 'flex',
  FLEX_SHORT: 'f',
  BORDER_RADIUS: 'radius',
  BORDER_RADIUS_SHORT: 'r',
  BORDER_RADIUS_TOP_LEFT: 'radiustl',
  BORDER_RADIUS_TOP_LEFT_SHORT: 'rtl',
  BORDER_RADIUS_TOP_RIGHT: 'radiustr',
  BORDER_RADIUS_TOP_RIGHT_SHORT: 'rtr',
  BORDER_RADIUS_BOTTOM_LEFT: 'radiusbl',
  BORDER_RADIUS_BOTTOM_LEFT_SHORT: 'rbl',
  BORDER_RADIUS_BOTTOM_RIGHT: 'radiusbr',
  BORDER_RADIUS_BOTTOM_RIGHT_SHORT: 'rbr',
  BORDER_COLOR: 'bordercolor',
  BORDER_COLOR_SHORT: 'bc',
}
