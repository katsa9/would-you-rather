import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
// import { setAuthedUser } from '../actions/authedUser'

//thunk action creator
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({questions, users}) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      //dispatch(setAuthedUser(??))
      dispatch(hideLoading())
    })
  }
}

