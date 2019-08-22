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

export function getPollData(user, question, authedUser) {
  const { avatarURL, name } = user
  const { optionOne, optionTwo } = question
  const totalVotes = optionOne.votes.length + optionTwo.votes.length
  let yourVote = ''
  if(optionOne.votes.includes(authedUser)) {
    yourVote = "optionOne"
  }else if(optionTwo.votes.includes(authedUser)) {
    yourVote = "optionTwo"
  }

  return {
    name,
    avatarURL,
    yourVote,
    option1: {
      text: optionOne.text,
      votes: optionOne.votes.length,
      percentage: (optionOne.votes.length / totalVotes *100).toFixed(0)
    },
    option2: {
      text: optionTwo.text,
      votes: optionTwo.votes.length,
      percentage: (optionTwo.votes.length / totalVotes *100).toFixed(0)
    },
    total: optionOne.votes.length + optionTwo.votes.length,
  }
}