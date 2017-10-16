import * as React from 'react'
import glamorous from 'glamorous'

import {
  Intro,
  Nav,
  Content
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { intro: true }
  }

  handleScroll = (e: any) => {
    const top = window.scrollY
    const threshold = window.innerHeight

    if (this.state.intro && top > threshold) {
      console.log('setting intro to FALSE')
      this.setState({ intro: false })
    } else if (!this.state.intro && top < threshold) {
      console.log('setting intro to TRUE')
      this.setState({ intro: true })
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const sticky = !this.state.intro

    console.log(sticky)

    return (
      <div>
        <Intro />
        <Nav sticky={sticky} />
        <Content />
      </div>
    );
  }
}

export default App
