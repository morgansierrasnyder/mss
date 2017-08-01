import React from 'react'
import { string, arrayOf } from 'prop-types'
import styled from 'styled-components'

const Thumbnail = styled.img`
  width: 210px;
  margin: 4px 4px 0px 4px;
`

class Gallery extends React.Component {
  static propTypes = {
    images: arrayOf(string)
  }

  render() {
    const { images } = this.props

    return (
      <div>
        {images.map(imgsrc => (
          <Thumbnail src={imgsrc} alt="thumbnail" />
        ))}
      </div>
    )
  }
}

export default Gallery
