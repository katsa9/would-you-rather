import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

class TopNav extends Component {
  
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  handleLogout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render () {
    const { collapsed } = this.state
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="#">Would you Rather</a>
        <button onClick={this.toggleNavbar} 
          className={classTwo} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={classOne} id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <NavLink to='/' exact className="nav-link" activeClassName='active'>
               Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/add' className="nav-link" activeClassName='active'>
            Add Question
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/leaderboard' className="nav-link" activeClassName='active'>
            Leaderboard
          </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link pull-left" href="/" onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>
          {this.props.user
          ? <span className="navbar-text">
            Logged in as {this.props.user}
            </span>
           : null} 
        </div>
      </nav>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  const user = users[authedUser]
  return {
    user: user ? user.name : null
  }
}
export default connect(mapStateToProps)(TopNav)

