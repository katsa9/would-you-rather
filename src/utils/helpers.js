export function leaderboardData(user) {
  const { id, name, avatarURL, answers, questions } = user
  const answered = Object.keys(answers).length
  const created = Object.keys(questions).length
  return {
    id,
    name,
    avatar: avatarURL,
    answered: answered !== 0 ? answered : 0,
    created: created !== 0 ? created : 0,
    score: answered + created
  }
}

export function pollData(user, question, authedUser) {
  const { avatarURL } = user
  const { optionOne, optionTwo, author } = question
  const yourVote = ''
  if(optionOne.votes.includes(authedUser))

  return {
    author,
    avatarURL,
    yourVote,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text,
    optionOneVotes: optionOne.votes.length,
    optionTwoVotes: optionTwo.votes.length,
    total: optionOne.votes.length + optionTwo.votes.length,
    percentage: optionOne.votes.length / optionTwo.votes.length *100,
  }
}