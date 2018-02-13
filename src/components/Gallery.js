import React from 'react'
import glamorous, { Div } from 'glamorous'
import { map, range, reduce } from 'lodash'
import { Row, Col, Container } from 'glamorous-grid'

import Collage from '../../assets/cornell.jpg'
import Engineer from '../../assets/engineers-clip.mov'
import SweetBites from '../../assets/sb-clip.mov'
import Republic from '../../assets/republic-day.jpg'

const youtubeAR = 560 / 315

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

const YouTube = ({ source, params }) => {
	const query = `autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0${
		params ? reduce(params, (s, v, k) => s + `&${k}=${v}`, '') : ''
	}`
	
	return (
		<iframe
			src={`${source}?${query}`}
			width="418"
			height="235"
			frameBorder="0"
			allow="autoplay; encrypted-media"
	  	allowFullScreen
	  >
	  </iframe>
	)
}

export default () => (
  <Div>
  	<Row style={{ paddingBottom: '8px' }}>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  	</Row>
  	<Row style={{ paddingBottom: '8px' }}>
  		<Col span={2/3}>
  			<YouTube source="https://www.youtube.com/embed/5dOc7Z3ZjFo" params={{ start: 441, end: 489 }} />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Collage} />
  		</Col>
  	</Row>
  	<Row style={{ paddingBottom: '8px' }}>
  		<Col span={1/3}>
  			<Image src={Collage} />
  		</Col>
  		<Col span={2/3}>
  			<YouTube source="https://www.youtube.com/embed/bbJXy5ACatg" />
  		</Col>
  	</Row>
  	<Row style={{ paddingBottom: '8px' }}>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Republic} alt="drawing" />
  		</Col>
  	</Row>
  	<Row style={{ paddingBottom: '8px' }}>
  		<Col span={2/3}>
  			 <Video loop autoPlay src={SweetBites} />
  		</Col>
  		<Col span={1/3}>
  			<Image src={Collage} />
  		</Col>
  	</Row>
  	<Row>
	  	{images.map(img => (
	  		<Col span={1/3}>
	  			<Image src={img} alt="halp" />
	  		</Col>
	  	))}
	  </Row>
  </Div>
)

