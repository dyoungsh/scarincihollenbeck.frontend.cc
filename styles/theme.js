const fonts = {
  xs: 'font-size: 0.75rem; line-height: 1rem',
  sm: 'font-size: 0.875rem;; line-height: 1.25rem;',
  base: 'font-size: 12px; line-height: 1.5rem',
  md: 'font-size: 1.025rem; line-height: 1.5rem',
  lg: 'font-size: 1.125rem; line-height: 1.75rem',
  xl: 'font-size: 1.25rem; line-height: 1.75rem',
  xxl: 'font-size: 1.5rem; line-height: 2rem',
  xxxl: 'font-size: 1.875rem; line-height: 2.25rem',
  xxxxl: 'font-size: 2.25rem; line-height: 2.5rem',
  xxxxxl: 'font-size: 3rem; line-height: 1rem',
  xxxxxxl: 'font-size: 3.75rem; line-height: 1rem',
  xxxxxxxl: 'font-size: 4.5rem; line-height: 1rem',
  xxxxxxxxl: 'font-size: 6rem; line-height: 1rem',
  xxxxxxxxxl: 'font-size: 8rem; line-height: 1rem',
  bold: 700,
  normal: 500,
  proximaRegular: 'Proxima Nova Regular',
  proximaItalic: 'Proxima Nova Italic',
  proximaBold: 'Proxima Nova Bold',
}

const colors = {
  black: '#212121',
  pureBlack: '#000000',
  white: '#fff',
  offWhite: '#fcfaff',
  red: '#b50000',
  secondaryRed: '#db2220',
  blue: '#3344dd',
  gray: '#e9e9e9',
  secondaryGray: '#dee2e6',
  thirdGray: '#ced4da',
  secondaryBlue: '#33667d',
  gradientRed: 'linear-gradient(360deg, #901918 60%, #dd2624 100%), #333333',
  shadowNormal: '0 5px 10px 0 rgba(138, 155, 165, 0.15)',
  shadowLight: '0 .5rem 1rem rgba(0,0,0,.15)!important',
}

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
}

const theme = {
  breakpoints,
  colors,
  fonts,
}

export default theme
