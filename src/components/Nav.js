import * as React from 'react'
import glamorous from 'glamorous'
import { Row, Col } from 'glamorous-grid'

import stella from './assets/stella.png'
import { Body, Display } from './style/typography'

const navHeight = 90

const Banner = glamorous.div(
  {
    zIndex: 30,
    width: '100%',
    height: `${navHeight}px`,
    backgroundColor: '#fff'
  },
  props => props.sticky && ({
    position: 'fixed',
    top: 0,
    left: 0
  })
)

const Emblem = glamorous.img({
  height: '60px'
})

const Nav = ({ sticky }) => (
  <Banner sticky={sticky}>
    <Row alignItems="center" justifyContent="around" style={{ padding: '15px 90px' }}>
      <Col textAlign="left" span={1/3}>
        <Body>projects&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;portfolio</Body>
      </Col>
      <Col textAlign="center" span={1/3}>
        <Emblem src={stella} />
      </Col>
      <Col textAlign="right" span={1/3}>
        <Body>bio&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;contact</Body>
      </Col>
    </Row>
  </Banner>
)

Nav.height = navHeight

export default Nav

