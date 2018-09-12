import React from 'react'

function TonaldSays (props) {
  if (props.quote === null) {
    return (
      <div className="container">
        <br />
        <blockquote className="title has-text-centered">loading ...</blockquote>
        <br />
      </div>
    )
  }
  return (
    <div className="container">
      <br />
      <div className="content">
        <p className="subtitle has-text-centered">This is what Tonald Drump has to say about you: </p>
        <br />
        <blockquote className="title has-text-centered">{props.quote}</blockquote>
      </div>
    </div>
  )
}

export default TonaldSays
