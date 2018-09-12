import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/sad-world" component={(props) => <Results name={this.state.name} resetResult={this.resetResult} isSubmitted={this.state.isSubmitted}/>} />
            <Route path="/" component={(props) => <NameForm handleForm={this.handleForm}/> } />
          </Switch>
          <Footer randomFace={this.state.randomFace}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
