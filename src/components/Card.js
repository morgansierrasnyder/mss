import React from 'react'
import glamorous from 'glamorous'
import { Row, Col } from 'glamorous-grid'

import Name from '../../assets/name.png'

const Card = glamorous.div({
  backgroundColor: 'whitesmoke',
  width: '420px',
  height: '240px',
  position: 'fixed',
  top: 'calc(50% - 100px)',
  left: 'calc(50% - 210px)',
  boxShadow: '0 4px 8px 0 rgba(63, 68, 73, 0.25)'
})

const Title = glamorous.div({
	position: 'fixed',
	top: 0,
	right: '66%',
	fontFamily: `'Sura', serif`,
	fontSize: '80px',
	lineHeight: '70px',
	textAlign: 'right',
})

const Image = glamorous.img({
	width: '360px'
})

export default () => (
	<Title>
		<Image src={Name} alt="Morgan Sierra Snyder" />
	</Title>
)
