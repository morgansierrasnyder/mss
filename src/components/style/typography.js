import glamorous from 'glamorous'

const Base = glamorous.div({
  '-webkit-font-smoothing': 'antialiased'
})
const Display = glamorous(Base)({
  'font-family': '"Permanent-Marker", cursive',
  'font-size': '21px',
  'line-height': '24px'
})

const Body = glamorous(Base)({
  'font-family': '"Josefin Sans", sans-serif',
  'font-size': '18px',
  'line-height': '21px'
})

export { Display, Body }
