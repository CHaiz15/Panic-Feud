import $ from 'jquery';
import Round from './Round.js';
import Survey from './Survey.js';



class Game {
  constructor(surveys) {
    this.surveys = surveys;
    this.usedSurveyIds = [];
    this.players = [];
    this.currentRound;
  }
  startRound() {
    if (this.usedSurveyIds.length === 3) {
      startPanicRound();
    } else if (this.usedSurveyIds.length === 2) {
      startPanicRound();
    } else if (this.usedSurveyIds.length === 1) {
      this.currentRound = new Round(this.surveys, this.players, 2);
    } else {
      this.currentRound = new Round(this.surveys, this.players, 1);
    }
    this.usedSurveyIds.push(this.currentRound.currentSurvey.id);
  }
  startPanicRound() {
    let panicPlayer;
    if ((this.players[0].totalPoints > this.players[1].totalPoints) && this.players[0].playedPanic === false) {
      panicPlayer = this.players[0];
    } else if ((this.players[1].totalPoints > this.players[0].totalPoints) && this.players[1].playedPanic === false)) {
    panicPlayer = this.players[1];
  }
  this.currentRound = new PanicRound(this.surveys, panicPlayer);
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
