import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPollData } from '../utils/helpers'

class Poll extends Component {
  render () {
    const { pollData } = this.props
    return (
      <div className="green-container py-3 px-4">
        <div className="container">
          <b>Asked by: {pollData.name}</b>
          <hr></hr>
          <div className="container">
            <div className="row">
              <div className="avatar-container col-sm-3 col-md-3">
                <img
                  src={pollData.avatarURL}
                  alt={`Avatar of ${pollData.name}`}
                  className="avatar"
                  width="120"
                  height="120"
                />
              </div>
              <div className="col-sm-8 col-md-8">
                <b>Results</b>
                <div className="my-2 answer">
                  {pollData.yourVote === 'optionOne' && (
                    <div className="pt-2 your-vote">Your vote</div>
                  )}
                  {pollData.option1.text}
                </div>
                <table className="table centered">
                  <thead>
                    <tr>
                      <th scope="col">%</th>
                      <th scope="col">Votes</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>{pollData.option1.percentage}</td>
                      <td>{pollData.option1.votes} out of {pollData.total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-2 answer">
                  {pollData.yourVote === 'optionTwo' && (
                    <div className="pt-2 your-vote">Your vote</div>
                  )}
                  {pollData.option2.text}
                </div>
                <table className="table centered">
                  <thead>
                    <tr>
                      <th scope="col">%</th>
                      <th scope="col">Votes</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td>{pollData.option2.percentage}</td>
                      <td>{pollData.option2.votes} out of {pollData.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  const pollData = getPollData(user, question, authedUser)
  return {
    pollData
  }
}

export default connect(mapStateToProps)(Poll)