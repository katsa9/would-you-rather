import React, { Component } from 'react'
import { connect } from 'react-redux'
import { leaderboardData } from '../utils/helpers'

class Leaderboard extends Component {
  render () {
    return (
      <div className="green-container">
        {this.props.users.map((user) => (
          <div className="container">
          <b>{user.name}</b>
          <hr></hr>
          <div className="container">
            {/* <div className="row"> */}
              <div className="avatar-container col-sm-3 col-md-3">
                <img
                  src={user.avatar}
                  alt={`Avatar of ${user.name}`}
                  className="avatar"
                  width="120"
                  height="120"
                />
              </div>
              <div className="col-sm-9 col-md-9">
                <p>Questions Answered: {user.answered}</p>
                <hr></hr>
                <p>Questions Created: {user.created}</p>
              {/* </div> */}
            </div>
          </div>
        </div>
        ))}
 
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const items = Object.values(users).map((item) => leaderboardData(item))
  return {
    users: items
  }
}

export default connect(mapStateToProps)(Leaderboard)