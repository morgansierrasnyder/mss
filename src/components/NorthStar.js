import React from 'react'
import styled from 'styled-components'

import Collage from '../../assets/collage.jpg'

const Mss = styled.div`
  position: fixed;
  height: 121px;
  width: 100%;
  top: 0;
  text-align: center;
  background-image: url(${Collage});
  background-size: 100%;
  background-attachment: fixed;
`
const MorganSierraSnyder = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  opacity: 1;
  position: absolute;
  top: 44px;
  left: 121px;
`

class NorthStar extends React.Component {
  render() {
    return (
      <Mss className={this.props.className}>
        <MorganSierraSnyder>Morgan Sierra Snyder</MorganSierraSnyder>
      </Mss>
    )
  }
}

export default NorthStar