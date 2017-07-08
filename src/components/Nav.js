import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  padding: 12px;
`
const NavItem = styled.div`
  padding: 4px;
  color: goldenrod;
  font-size: small;
  text-align: right;
  transition: transform 0.3s, color 0.5s;

  &:hover {
    color: darkgoldenrod;
    transform: translateX(1em);
  }
`

class Nav extends React.Component {
  render() {
    return (
      <Navigation>
        <NavItem>who am I?</NavItem>
        <NavItem>ventured</NavItem>
        <NavItem>coded</NavItem>
        <NavItem>drawn</NavItem>
        <NavItem>painted</NavItem>
        <NavItem>designed</NavItem>
        <NavItem>rendered</NavItem>
        <NavItem>written</NavItem>
        <NavItem>built</NavItem>
        <div>&nbsp;</div>
        <NavItem>who are You?</NavItem>
      </Navigation>
    )
  }
}

export default Nav