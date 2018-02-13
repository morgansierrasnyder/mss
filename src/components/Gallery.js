import React from 'react'
import glamorous, { Div } from 'glamorous'
import { range } from 'lodash'
import { Row, Col, Container } from 'glamorous-grid'

import Collage from '../../assets/cornell.jpg'

const images = range(0, 18).map(i => Collage)

const Image = glamorous.img({
	maxHeight: '500px',
	maxWidth: '100%'
})

export default () => (
  <Div>
  	<Row>
	  	{images.map(img => (
	  		<Col span={1/3}>
	  			<Image src={img} alt="halp" />
	  		</Col>
	  	))}
	  </Row>
  </Div>
)

