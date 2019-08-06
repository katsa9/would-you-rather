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
      <div className="login-container">
        <div className="text-center my-5">
        Welcome to
        </div>
        <div className="panel">
          <h2 className="text-center main-heading my-5">Would you Rather?</h2>
          <img src={cover}
          type="image/svg+xml"
          className="col-md-6 col-sm-5 rounded mx-auto d-block" alt="Image of person deciding"></img>
        </div>
        <div className="my-5 text-center">
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
              <a key={user.id} className="dropdown-item"
                onClick={(e) => this.handleUserSelected(e, user)}>
                {user.name}</a>
            ))}
          </div>
        </div>
        </div>
        <div className="text-center">
          <button
              className="btn btn-primary"
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