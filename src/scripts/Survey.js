class Survey {
  constructor(data) {
    this.id = data.survey.id;
    this.question = data.survey.question;
    this.answers = data.answers.sort((a, b) => {return b.respondents - a.respondents});
  }
  checkGuess(playerGuess) {
    return this.answers.reduce((acc, answer) => {
      acc.push(answer.answer.toLowerCase());
      return acc;
    }, []).includes(playerGuess.toLowerCase())
  }
  findPoints(playerGuess) {
    let matchingAnswer = this.answers.find(answer => answer.answer.toLowerCase() === playerGuess.toLowerCase());
    return matchingAnswer.respondents;
  }
}

export default Survey;
