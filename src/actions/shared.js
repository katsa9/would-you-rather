//for setting authed user and loading questions
import { getQuestions } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
// import { setAuthedUser } from '../actions/authedUser'

//thunk action creator
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getQuestions()
    .then((questions) => {
      dispatch(receiveQuestions(questions))
      //dispatch(setAuthedUser(??))
      dispatch(hideLoading())
    })
  }
}

