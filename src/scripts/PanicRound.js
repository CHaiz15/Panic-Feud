import $ from 'jquery';

class PanicRound {
  constructor(survey, panicPlayer) {
    this.player = panicPlayer;
    this.survey = survey;
    this.points = 0;
    this.timer;
    this.correctGuesses = [];
  }
  createSurvey() {
    let foundSurvey;
    let foundAnswers = [];
    let randomId = Math.floor(Math.random() * 15) + 1;
    this.survey.surveys.find(survey => {
      if (survey.id === randomId) {
        foundSurvey = survey;
      }
    })
    this.survey.answers.filter(answer => {
      if (answer.surveyId === randomId) {
        foundAnswers.push(answer);
      }
    })
    let surveyObject = {
      survey: foundSurvey,
      answers: foundAnswers
    }
    this.survey = new Survey(surveyObject);
  }
  panicGuess(guessResult, survey) {
    let trueFalse = this.player.makeGuess(guessResult, survey);
    if (trueFalse[0]) {
      this.addPanicRoundPoints();
    }
  }
  addPanicRoundPoints() {
    this.points += this.player.lastCorrectGuessPoints;
  }
  endPanicRound() {
    if(this.timer === 0) {
    }
  }
  startTimer() {

  }
}

export default PanicRound;
