import React, { Component } from 'react'
import Axios from 'axios'

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

  tonaldSays (name) {
    Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`)
      .then ((response) => {
        this.setState({
          quote: response.data.message
        })
      })
      .catch((error) => {
        this.setState({
          quote: `You are such a terrible human being, even Tonald Drump doesn't want to have any business with you.`
        })
      })
  }

  handleForm (inputForm) {
    this.setState({
      name: inputForm.name,
      loc: inputForm.location,
      isSubmitted: true
    }, () => {
      this.tonaldSays(this.state.name)
    })
  }

  resetResult () {
    console.log("hahahha")
    this.setState({
      quote: null
    })
  }

  render() {
    return (
      <div>
        <Header />
        <NameForm handleForm={this.handleForm}/>
        <br />
        { this.state.quote && <Results quote={this.state.quote} resetResult={this.resetResult}/> }
        <Footer randomFace={this.state.randomFace}/>
      </div>
    )
  }
}

export default App
