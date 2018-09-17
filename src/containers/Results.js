import React from 'react'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { TonaldSays } from '../components'
import { tonaldSays } from '../actions'

class Results extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    if(this.props.form.isSubmitted) {
      this.props.tonaldSays(this.props.form.name)
    } else {
      this.redir()
    }
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
          <TonaldSays quote={this.props.form.quote}/>
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
    form: state.form,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tonaldSays: (name) => dispatch(tonaldSays(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Results)
