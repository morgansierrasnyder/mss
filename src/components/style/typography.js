import glamorous from 'glamorous'

const Base = glamorous.div({
  WebkitFontSmoothing: 'antialiased'
})
const Display = glamorous(Base)({
  fontFamily: '"Permanent Marker", cursive',
  fontSize: '18px',
  lineHeight: '24px',
  color: '#3B3C36'
})

const Body = glamorous(Base)({
  fontFamily: '"Josefin Sans", sans-serif',
  fontWeight: 100,
  fontSize: '18px',
  lineHeight: '21px'
})

export { Display, Body }
