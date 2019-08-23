import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

  state = {
    showAnswered: false
  }

  showAnsweredQuestions = () => {
    this.setState({ showAnswered: true })
  }

  showUnAnsweredQuestions = () => {
    this.setState({ showAnswered: false })
  }

  getQuestionList = () => {
    const { showAnswered } = this.state
    const { authedUser, questions } = this.props
    console.log("QUESIONS", questions)
    if(showAnswered) {
      return Object.keys(questions)
      .filter((q) => (questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }else {
      return Object.keys(questions)
      .filter((q) => (!questions[q].optionOne.votes.includes(authedUser) && !questions[q].optionTwo.votes.includes(authedUser)))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
  }

  render () {
    const { showAnswered } = this.state
    const answeredClass = showAnswered ? 'my-1 btn btn-selected' : 'my-1 btn btn-secondary';
    const unansweredClass = !showAnswered ? 'my-1 btn btn-selected' : 'my-1 btn btn-secondary';
    return (
      <div className="center">
        <div className="mb-4 text-center">
          <div className="btn-group text-center" role="group" data-toggle="button">
            <button onClick={this.showUnAnsweredQuestions}
              type="button" className={unansweredClass}>
              Unanswered Questions</button>
            <button onClick={this.showAnsweredQuestions}
              type="button" className={answeredClass}>
              Answered Questions</button>
          </div>
        </div>
        <div className="green-container">
          <ul>
            {this.getQuestionList().map((id) => (
              <li key={id}>
                <Question
                  id={id}
                  submitState={false} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(QuestionList)