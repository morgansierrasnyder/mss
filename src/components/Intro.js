import * as React from 'react'
import glamorous from 'glamorous'
import { Row, Col } from 'glamorous-grid'

import stella from './assets/stella.png'
import { Body } from './style/typography'

const Intro = glamorous(Row)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff'
})

const Image = glamorous.img({
  //height: '250px'
})

export default () => (
  <Intro>
    <Image src={stella} />
    <Body>welcome !</Body>
  </Intro>
)
