import $ from 'jquery';
import Round from './Round.js';
import Survey from './Survey.js';
import PanicRound from './PanicRound.js';
import {enableAnswerInput, disableAnswerInput, showPanicRoundScreen, populatePanicPlayerInfo} from './domUpdates.js';



class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.usedSurveyIds = [];
    this.players = [];
    this.currentRound;
  }
  startRound() {
    if (this.usedSurveyIds.length === 3) {
      this.startPanicRound();
    } else if (this.usedSurveyIds.length === 2) {
      this.startPanicRound();
    } else if (this.usedSurveyIds.length === 1) {
      this.currentRound = new Round(this.surveys, this.players, 2);
      enableAnswerInput(this.currentRound.currentPlayer)
      disableAnswerInput(1)
    } else {
      this.currentRound = new Round(this.surveys, this.players, 1);
      enableAnswerInput(this.currentRound.currentPlayer);
    }
    this.currentRound.createSurvey();
    this.usedSurveyIds.push(this.currentRound.currentSurvey.id);
  }

  startPanicRound() {
    let panicPlayer;
    if ((this.players[0].totalPoints > this.players[1].totalPoints) && this.players[0].playedPanic === false) {
      panicPlayer = this.players[0];
      this.players[0].playedPanic = true;
    } else if ((this.players[1].totalPoints > this.players[0].totalPoints) && this.players[1].playedPanic === false) {
      panicPlayer = this.players[1];
      this.players[1].playedPanic = true;
    }
    this.currentRound = new PanicRound(this.surveys, panicPlayer);
    showPanicRoundScreen();
    populatePanicPlayerInfo(panicPlayer);
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
