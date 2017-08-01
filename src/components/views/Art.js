import React from 'react'
import styled from 'styled-components'

import Gallery from '../Gallery'
import collage from '../../assets/collage.jpg'

const images = [collage, collage, collage, collage, collage, collage]

class Art extends React.Component {
  render() {
    return <Gallery images={images} />
  }
}

export default Art
