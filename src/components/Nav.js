import React, { Component } from 'react'
import { connect } from 'react-redux' 

class TopNav extends Component {
  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="#">Would you Rather</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Add Question</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Leaderboard</a>
            </li>
            
          </ul>
           
        </div>
        <span class="navbar-text">
              Logged in as {this.props.user}
            </span>
            <li class="logout-link">
              <a class="nav-link pull-left" href="#">Logout</a>
            </li>
      </nav>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  const user = users[authedUser].name
  return {
    user
  }
}
export default connect(mapStateToProps)(TopNav)

