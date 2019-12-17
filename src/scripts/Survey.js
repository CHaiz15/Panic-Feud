class Survey {
  constructor(data) {
    this.id = data.surveys[0].id;
    this.question = data.surveys[0].question;
    this.answers = data.answers;
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
