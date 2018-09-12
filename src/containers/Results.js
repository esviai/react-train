import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

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

  redir() {
    return (
      <Redirect to={{
        pathname: "/"
      }} />
    )
  }

  render () {
    if (this.props.isSubmitted) {
      return (
        <div>
          <TonaldSays quote={this.state.quote}/>
          <br />
          <div className="has-text-centered">
            <Link  to="/" className="button is-primary is-outlined is-large">Start Over</Link>
          </div>
        </div>
      )
    }
    return this.redir()
  }
}

export default Results
