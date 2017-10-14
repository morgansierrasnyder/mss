import * as React from 'react'
import glamorous from 'glamorous'
import { Row, Col } from 'glamorous-grid'

import stella from './assets/stella.png'
import { Body, Display } from './style/typography'

const Header = glamorous(Row)({
  padding: '18px 90px',
  zIndex: 100
})

const Emblem = glamorous.img({
  height: '60px'
})

export default () => (
  <Header alignItems="center" justifyContent="around">
    <Col textAlign="left" span={1/3}>
      <Display>projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;portfolio</Display>
    </Col>
    <Col textAlign="center" span={1/3}>
      <Emblem src={stella} />
    </Col>
    <Col textAlign="right" span={1/3}>
      <Display>about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact</Display>
    </Col>
  </Header>
)
