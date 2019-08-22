import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Question from './Question'
import NotFound from './NotFound'

class QuestionPage extends Component {
  render () {
    const { question, hasBeenAnswered } = this.props

    if (question === null) {
      return <NotFound />
    }

    return (
      <div className="container">
        {question ? 
        (<div>
          {hasBeenAnswered
            ? (<Poll id={question.id} />)
            : (<Question id={question.id} submitState={true} />)
          }
        </div> )
        :(<NotFound />)}
      </div>
    )
  }
}
function mapStateToProps ({ authedUser, questions }, props) {
  const { id } = props.match.params  //from react router
  const question = questions[id]
  return {
    question,
    hasBeenAnswered: question ? question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) : false
  }
}
export default connect(mapStateToProps)(QuestionPage)