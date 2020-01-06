import $ from 'jquery';
import Game from './Game.js';

class Round extends Game {
  constructor(survey, players) {
    super()
    this.survey = survey;
    this.answers = survey.answers;
    // this.usedSurveys = usedSurveys; INHERITANCE?
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = undefined;
    this.players = players;
    this.guessFlag = false;
  }

  takeTurn(guessResult) {
    let player = this.players.filter(player => {
      return player.playerNum !== this.currentPlayer
    })
    if (guessResult) {
      this.guessFlag = true;
    } else {
      this.guessFlag = false;
      this.currentPlayer = player[0].playerNum;
    }
  }

  setStartingPlayer() {
    this.currentPlayer = game.usedSurveyIds.length
  }

  startRound() {
    setStartingPlayer();
  }
}

export default Round;
