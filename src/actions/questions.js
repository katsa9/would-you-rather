import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_NEW_QUESTION = "SAVE_NEW_QUESTION"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function saveNewQuestion (question) {
  return {
    type: SAVE_NEW_QUESTION,
    question
  }
}
//thunk
export function handleSaveNewQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(saveNewQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function answerQuestion (info) {
  return {
    type: SAVE_QUESTION_ANSWER,
    info
  }
}

export function handleAnswerQuestion ({ id, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestionAnswer({
      authedUser,
      id,
      answer
    })
      .then(() => dispatch(answerQuestion({ authedUser, id, answer })))
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion', e)
        alert('There was an error. Try again')
      })
  }
}