import $ from 'jquery';
import Round from './Round.js';
import Survey from './Survey.js';
import {enableAnswerInput} from './domUpdates.js';



class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.usedSurveyIds = [];
    this.players = [];
    this.currentRound;
  }
  startRound() {
    // this.usedSurveyIds.push(this.currentRound.currentSurvey.id);
    if (this.usedSurveyIds.length === 2) {
      // needs refactor based on survey instantiation
      startPanicRound(this.currentSurvey);
    } else if (this.usedSurveyIds.length === 1) {
      this.currentRound = new Round(this.surveys, this.players, 2);
    } else {
      this.currentRound = new Round(this.surveys, this.players, 1);
      enableAnswerInput(this.currentRound.currentPlayer);
    }
    this.usedSurveyIds.push(this.currentRound.currentSurvey.id);
  }
  startPanicRound(surveyObject) {
    let panicRound = new PanicRound(this.currentSurvey);
  }
  endGame() {
    // Invoke display endGame function to Display the winner on the DOM.

    // Send the winners score to high scores api.
    // fetch('http://fe-apps.herokuapp.com/api/v1/gametime/leaderboard', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(someDataToSend),
    // })

    // Update DOM leaderboard?
  }
  restartGame() {

  }
  quitGame() {

  }
}

export default Game;
