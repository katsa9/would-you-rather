import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pollData } from '../utils/helpers'

class Poll extends Component {
  render () {
    const { question } = this.propsß
    return (
      <div className="green-container">
        <div className="container">
          <b>Asked by: {question.author}</b>
          <hr></hr>
          <div className="container">
            <div className="row">
              <div className="avatar-container col-sm-3 col-md-3">
                <img
                  src={user.avatar}
                  alt={`Avatar of ${user.name}`}
                  className="avatar"
                  width="120"
                  height="120"
                />
              </div>
              <div className="col-sm-6 col-md-6">
                <p>Questions Answered: {user.answered}</p>
                <hr></hr>
                <p>Questions Created: {user.created}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) {
const question = 
}

export default connect()(Poll)