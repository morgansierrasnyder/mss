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
  background-color: yellow;

  .obscure {
    top: -66px;
  }
`

class NorthStar extends React.Component {
  render() {
    return (
      <Mss className={this.props.className}>Morgan Sierra Snyder</Mss>
    )
  }
}

export default NorthStar