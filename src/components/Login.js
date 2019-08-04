import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from './Dropdown';

class Login extends Component {
  render () {
    const { users } = this.props
    console.log("the userss: " + users)
    return (
      <div>
        <h2 className="center">Welcome to Would you Rather?</h2>
        <p>Please select a user</p>
        <Dropdown />
        {/* <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {users.map((user) => (
              <a className="dropdown-item">{user.name}</a>
            ))}
          </div>
        </div> */}
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)