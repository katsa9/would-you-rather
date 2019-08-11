import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  gotToPoll = (e, id) => {
    //navigate to question page with id
  }

  render () {
    const { question, author, avatar } = this.props
    return (
      <div className="container">
        <b>{author} asks:</b>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="avatar-container col-sm-3 col-md-3">
              <img
                src={avatar}
                alt={`Avatar of ${author}`}
                className="avatar"
                width="120"
                height="120"
              />
            </div>
            <div className="col-sm-9 col-md-9">
              <b>Would you rather..</b>
              <div className="my-2 answer">
                {question.optionOne.text}
              </div>
              <b className="col-md-12">OR</b>
              <div className="my-2 answer">
                {question.optionTwo.text}
              </div>
            </div>
          </div>
        <div className="text-right">
          <button
              className="btn btn-primary mt-3"
            onClick={this.goToPoll}>
            View Poll
          </button>
        </div>
        </div>
      </div>

    )
  }
}

//need to add authed user here
function mapStateToProps ({ questions, users }, { id }) { //second arg is props from parent
  const question = questions[id]

  const avatar = users[question.author].avatarURL
  const author = users[question.author].name
  return {
    question: question
      ? question
      : null,
    avatar: avatar ? avatar : null,
    author: author ? author : null
  }
}
export default connect(mapStateToProps)(Question)
