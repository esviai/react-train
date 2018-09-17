import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleForm, handleName, handleLoc } from '../actions'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
  }

  setName(name) {
    this.setState({
      name: name
    })
  }

  setLocation(loc) {
    this.setState({
      location: loc
    })
  }

  render () {
    return (
      <div className="container">
        <br />
        <br />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <p className="title" style={{color: 'white',}}>
              Please input your name and origin.
              <br />
              Then I'll tell you some bad news.
            </p>
            <div className="field">
              <label className="label">Nickname</label>
              <p className="control">
                <input
                  onChange={(e) => this.props.handleName(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Nickname"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <p className="control">
                <input
                  onChange={(e) => this.props.handleLoc(e.target.value)}
                  className="input"
                  type="text"
                  placeholder="Where do you come from?"
                />
              </p>
            </div>
            <Link to="/sad-world" onClick={() => this.props.handleForm()} className="button is-primary">Submit</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleForm: () => dispatch(handleForm()),
    handleName: (name) => dispatch(handleName(name)),
    handleLoc: (loc) => dispatch(handleLoc(loc))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameForm)
