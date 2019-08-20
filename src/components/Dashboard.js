import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class Dashboard extends Component {

  state = {
    showAnswered: false
  }

  showAnsweredQuestions = () => {
    this.setState({ showAnswered: true })
  }

  showUnAnsweredQuestions = () => {
    this.setState({ showAnswered: false })
  }

  render () {
    const { showAnswered } = this.state
    const answeredClass = showAnswered ? 'my-2 btn btn-selected' : 'my-2 btn btn-secondary';
    const unansweredClass = !showAnswered ? 'my-2 btn btn-selected' : 'my-2 btn btn-secondary';
    return (
      <div className="center">
        <div className="text-center">
          <div className="btn-group text-center" role="group" data-toggle="button">
            <button onClick={this.showUnAnsweredQuestions}
              type="button" className={unansweredClass}>
              Unanswered Questions</button>
            <button onClick={this.showAnsweredQuestions}
              type="button" className={answeredClass}>
              Answered Questions</button>
          </div>
        </div>
        {this.state.showAnswered ?
          <QuestionList
            questions={this.props.answered} />
          : <QuestionList
            questions={this.props.unanswered} />
        }
      </div>

    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  //filter out questions that have been answered
  const answered = Object.keys(questions)
  .filter((q) => (questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)))
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const unanswered = Object.keys(questions)
  .filter((q) => (!questions[q].optionOne.votes.includes(authedUser) && !questions[q].optionTwo.votes.includes(authedUser)))
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    authedUser,
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)