import React from 'react'
import Axios from 'axios'

import { TonaldSays } from '../components'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: null
    }
  }

  componentDidMount() {
    Axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${this.props.name}`)
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

  reset = () => {
    this.setState({
      quote: null
    }, () => this.props.resetResult())
  }

  render () {
    return (
      <div>
        <TonaldSays quote={this.state.quote}/>
        <br />
        <div className="has-text-centered">
          <p className="button" onClick={this.reset}>Start Over</p>
        </div>
      </div>
    )
  }
}

export default Results
