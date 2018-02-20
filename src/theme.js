// theme.js

// breakpoint values
// any array length works with styled-system
const breakpoints = [
  '40em', '52em', '64em'
]

const colors = {
  text: '#282830',
  blue: '#5048F0',
  purple: '#381060',
  gray: [
    '#333',
    '#666',
    '#999',
    '#ccc',
    '#eee',
    '#f6f6f6',
  ]
}

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [
  0, 1, 2, 4, 8, 12, 16, 20, 32, 64
]

// typographic scale
const fontSizes = [
  '0.75rem', '1.125rem', '1.25rem', '1.375rem', '2.25rem', '2.5rem', '3rem', '3.5rem'
]

// for any scale, either array or objects will work
const lineHeights = [
  '1rem', '1.5rem', '2rem', '2.5rem'
]

const fontWeights = {
  normal: 500,
  xbold: 800
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
}

// border-radius
const radii = [
  0, 2, 4, 8
]

const borders = [
  0, '1px solid', '2px solid'
]

const fontFamilies = {
  serif: 'Proza Libre',
  sans: 'Muli',
  mono: 'mono'
}

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  fontFamilies
}

export default theme
