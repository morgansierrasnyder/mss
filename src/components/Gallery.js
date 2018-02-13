import React from 'react'
import glamorous, { Div } from 'glamorous'
import { range } from 'lodash'
import { Row, Col, Container } from 'glamorous-grid'

import Collage from '../../assets/cornell.jpg'
import Engineer from '../../assets/engineers-clip.mov'
import SweetBites from '../../assets/sb-clip.mov'

const images = range(0, 18).map(i => Collage)

const Image = glamorous.img({
	maxHeight: '500px',
	maxWidth: '100%'
})

const Video = glamorous.video({
	maxHeight: '500px',
	maxWidth: '100%',
	autoplay: true
})

export default () => (
  <Div>
  	<Row>
  		<Col span={2/3}>
  			 <Video loop autoPlay src={SweetBites} />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Collage} />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Collage} />
  		</Col>
  		<Col span={2/3}>
  			<Video loop autoPlay src={Engineer} />
  		</Col>
	  	{images.map(img => (
	  		<Col span={1/3}>
	  			<Image src={img} alt="halp" />
	  		</Col>
	  	))}
	  </Row>
  </Div>
)

