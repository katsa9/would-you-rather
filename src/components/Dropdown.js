import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dropdown extends Component {
  state = {
    isOpen: false,
    selectedUser: null
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleUserSelected = (e, user) => {
    e.preventDefault()
    this.setState(() => ({
      selectedUser: user
    }))
  }

  render () {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    const { users } = this.props
    const { selectedUser } = this.state
    
    return (
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
    );
  }
}
function mapStateToProps ({ users }) {
  console.log()
  return {
    users: Object.values(users)
  }

}

export default connect(mapStateToProps)(Dropdown)
