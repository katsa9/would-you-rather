import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Question from './Question'
import NotFound from './NotFound'

class QuestionPage extends Component {
  render () {
    const { question, hasBeenAnswered } = this.props
    return (
      <div className="container">
        {question ? 
        (<div>
          {hasBeenAnswered
            ? (<Poll id={question.id} />)
            : (<div className="green-container py-3 px-4">
              <Question id={question.id} submitState={true} />
              </div>)
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