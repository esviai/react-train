import React from 'react'
import { TonaldSays } from '../components'


class Results extends React.Component {
  render () {
    return (
      <div>
        <TonaldSays quote={this.props.quote}/>
        <br />
        <div className="has-text-centered">
          <p className="button" onClick={this.props.resetResult}>Start Over</p>
        </div>
      </div>
    )
  }
}

export default Results
