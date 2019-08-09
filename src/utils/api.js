import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

//should only be users initially
export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export function getQuestions() {
  return _getQuestions()
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}