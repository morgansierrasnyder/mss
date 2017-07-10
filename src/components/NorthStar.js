import React from 'react'
import styled from 'styled-components'

import { Row } from 'react-flexbox-grid'

const Mss = styled.div`
  height: 66px;
  width: 100%;
  top: 0;
  position: fixed;
  text-align: center;
  transition: top 0.2s ease-in-out;
  background-color: darkgoldenrod;

  .obscure {
    top: -66px;
  }
`
const MorganSierraSnyder = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
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