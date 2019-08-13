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