import React from 'react'
import styled from 'styled-components'

const StylishCompass = styled.div`
  width: 121px;
  position: fixed;
  margin: 12px 0px;
`
const CompassDirection = styled.div`
  padding: 4px;
  color: black;
  cursor: pointer;
  font-size: 13px;
  text-align: right;
  transition: transform 0.3s, color 0.5s;

  &:hover {
    color: indianred;
    transform: translateX(1em);
  }
`

class Compass extends React.Component {
  render() {
    return (
      <StylishCompass>
        <CompassDirection>who am I?</CompassDirection>
        <CompassDirection>ventured</CompassDirection>
        <CompassDirection>coded</CompassDirection>
        <CompassDirection>drawn</CompassDirection>
        <CompassDirection>painted</CompassDirection>
        <CompassDirection>designed</CompassDirection>
        <CompassDirection>rendered</CompassDirection>
        <CompassDirection>written</CompassDirection>
        <CompassDirection>built</CompassDirection>
        <div>&nbsp;</div>
        <CompassDirection>who are You?</CompassDirection>
      </StylishCompass>
    )
  }
}

export default Compass