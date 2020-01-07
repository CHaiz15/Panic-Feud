import $ from 'jquery';
import Game from './Game.js';
import Survey from './Survey.js';


class Round {
  constructor(survey, players) {
    this.question = survey.question;
    this.answers = survey.answers;
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

  sortAnswers() {
    this.answers.sort((a, b) => {return b.respondents - a.respondents});
  }
}

export default Round;
