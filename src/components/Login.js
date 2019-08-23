import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import cover from '../images/cover.svg';

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
    const menuClass = `dropdown-menu${this.state.isOpen ? "text-center show " : ""}`;
    const { selectedUser } = this.state
    return (
      <div className="green-container">
        <div className="text-center my-2">
        Welcome to
        </div>
        <div className="panel">
          <h2 className="text-center main-heading my-5">Would you Rather?</h2>
          <img src={cover}
          type="image/svg+xml"
          className="col-md-4 col-sm-3 rounded mx-auto d-block" alt="person deciding"></img>
        </div>
        <div className="my-2 text-center">
        <p>Please select a user:</p>
        <div className="text-center" onClick={this.toggleOpen}>
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true">
            {selectedUser !== null ? selectedUser.name : "Select User"}
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            {users.map((user) => (
              <button key={user.id} className="dropdown-item"
                onClick={(e) => this.handleUserSelected(e, user)}>
                {user.name}</button>
            ))}
          </div>
        </div>
        <div className="text-center pt-4">
          <button
            className="btn btn-primary"
            onClick={(e) => this.handleLogin(e)}
            disabled={selectedUser === null}>
            Login
          </button>
        </div>
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