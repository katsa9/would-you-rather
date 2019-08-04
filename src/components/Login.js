import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    isOpen: false,
    selectedUser: null
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleUserSelected = (e, user) => {
    e.preventDefault()
    this.setState({ selectedUser: user }, () => {
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.selectedUser.id))
  }

  render () {
    const { users } = this.props
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    const { selectedUser } = this.state
    return (
      <div>
        <h2 className="center">Welcome to Would you Rather?</h2>
        <p>Please select a user</p>
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true">
            {selectedUser !== null ? selectedUser.name : "Select User"}
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            {users.map((user) => (
              <a key={user.id} className="dropdown-item"
                onClick={(e) => this.handleUserSelected(e, user)}>
                {user.name}</a>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={(e) => this.handleLogin(e)}>
            Login
          </button>
        </div>
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