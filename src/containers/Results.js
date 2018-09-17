import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { TonaldSays } from '../components'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: null
    }
  }

  componentDidMount() {
    if(this.props.form.isSubmitted) {
      this.tonaldSays(this.props.form.name)
    } else {
      this.redir()
    }
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
    if (this.props.form.isSubmitted) {
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

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps, null)(Results)
