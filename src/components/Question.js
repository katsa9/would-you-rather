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
        <h3>{author} asks:</h3>
        <div className="col-md-4 text-center">
          <img
            src={avatar}
            alt={`Avatar of ${author}`}
            className="rounded"
            width="100"
            height="100"
          />
        </div>
        <div className="col-md-8">
          <b>Would you rather..</b>
          <div>
            {question.optionOne.text}
          </div>
          <b>OR</b>
          <div>
            {question.optionTwo.text}
          </div>
        </div>
        <div>
          <button onClick={this.goToPoll}
          >View Poll</button>
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
