import { 
  RECEIVE_QUESTIONS,
  SAVE_NEW_QUESTION,
  SAVE_QUESTION_ANSWER
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_NEW_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }  
    case SAVE_QUESTION_ANSWER: {
      const {authedUser, id, answer} = action.info
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat([authedUser])
          }
        }
      }
    }  
    default:
      return state
  }
}