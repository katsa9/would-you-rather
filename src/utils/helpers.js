export function leaderboardData(user) {
  const { id, name, avatarURL, answers, questions } = user
  return {
    id,
    name,
    avatar: avatarURL,
    answered: Object.keys(answers).length !== 0 ? answers.length : 0,
    created: Object.keys(questions).length !== 0 ? questions.length : 0,
    score: answers.length + questions.length
  }
}