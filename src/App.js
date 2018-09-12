import React, { Component } from 'react'

import { Header, Footer } from './components'
import { NameForm, Results } from './containers'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: null,
      loc: null,
      randomFace: null,
      issubmitted: false,
      quote: null
    }
    this.handleForm = this.handleForm.bind(this)
    this.resetResult = this.resetResult.bind(this)
  }

  componentDidMount () {
    let randomFace = Math.floor(Math.random() * 50000)
    this.setState({
      randomFace
    })
  }

  handleForm (inputForm) {
    this.setState({
      name: inputForm.name,
      loc: inputForm.location,
      isSubmitted: true
    })
  }

  resetResult () {
    this.setState({
      isSubmitted: false,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <NameForm handleForm={this.handleForm}/>
        <br />
        { this.state.isSubmitted && <Results resetResult={this.resetResult}/> }
        <Footer randomFace={this.state.randomFace}/>
      </div>
    )
  }
}

export default App
