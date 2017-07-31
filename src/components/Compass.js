import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import theme from '../theme'

const { turmeric, robin, lox } = theme.colors

const StylishCompass = styled.div`
  width: 150px;
  position: fixed;
  top: 30px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`
const Direction = styled.div`
  padding: 6px;
  margin: 4px;
  background-color: ${lox};
  width: min-content;
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  transition: transform 0.3s, background-color 0.45s, font-style 0.3s, padding 0.3s;

  &:hover {
    background-color: ${turmeric};
    transform: translateX(0.75em);
    padding-right: 12px;
    padding-left: 0px;
  }
  &:active {
    background-color: ${robin};
    transform: translateX(0.5em);
    padding-right: 6px;
    padding-left: 6px;
  }
`

class Compass extends React.Component {
  render() {
    return (
      <StylishCompass>
        <Link to="/bio"><Direction>who am I?</Direction></Link>
        <Link to="/art"><Direction>illustrated</Direction></Link>
        <Link to="/craft"><Direction>crafted</Direction></Link>
        <Link to="/code"><Direction>coded</Direction></Link>
        <Link to="/startup"><Direction>ventured</Direction></Link>
        <Link to="/cg"><Direction>rendered</Direction></Link>
        <Link to="/blog"><Direction>wrote</Direction></Link>
        <div>&nbsp;</div>
        <Link to="/contact"><Direction>who are You?</Direction></Link>
      </StylishCompass>
    )
  }
}

export default Compass
