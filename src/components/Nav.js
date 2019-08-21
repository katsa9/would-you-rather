import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom'

class TopNav extends Component {
  
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
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
            <li className="nav-item active">
            <NavLink to='/' exact activeClassName='active'>
               Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/add' activeClassName='active'>
            Add Question
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/leaderboard' activeClassName='nav-item active'>
            Leaderboard
          </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link pull-left" href="/">Logout</a>
            </li> */}
          </ul>
          <span className="navbar-text">
          Logged in as {this.props.user}
          </span>
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

