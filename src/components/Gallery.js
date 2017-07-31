import React from 'react'
import styled from 'styled-components'

import collage from '../assets/collage_deep-color.jpg'

Thumbnail = styled.img`
  height: 150px;
`

class Gallery extends React.Component {
  render() {
    return <img src={collage} alt="collage" />
  }
}