import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, Footer } from './components'
import { NameForm, Results } from './containers'
import store from './store/configureStore'

class App extends Component {
  constructor () {
    super()
    this.state = {
      randomFace: null,
    }
    this.resetResult = this.resetResult.bind(this)
  }

  componentDidMount () {
    let randomFace = Math.floor(Math.random() * 50000)
    this.setState({
      randomFace
    })
  }

  resetResult () {
    this.setState({
      isSubmitted: false,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/sad-world" component={(props) => <Results name={this.state.name} resetResult={this.resetResult} isSubmitted={this.state.isSubmitted}/>} />
              <Route path="/" component={(props) => <NameForm /> } />
            </Switch>
            <Footer randomFace={this.state.randomFace}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
