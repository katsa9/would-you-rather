import React, { Component } from 'react'
import { connect } from 'react-redux'
import { leaderboardData } from '../utils/helpers'

class Leaderboard extends Component {
  render () {
    return (
      <div className="green-container px-4">
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              <div className="container">
                <b>{user.name}</b>
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
                    <div className="col-sm-3 col-md-3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Score</th>
                          </tr>
                        </thead>
                        <tbody >
                          <tr>
                            <td>{user.score}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const items = Object.values(users).map((item) => leaderboardData(item))
  .sort((a, b) => b.score - a.score)
  return {
    users: items
  }
}

export default connect(mapStateToProps)(Leaderboard)