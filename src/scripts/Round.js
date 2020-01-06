import $ from 'jquery';

class Round {
  constructor(survey, players, game) {
    this.survey = survey.question;
    this.answers = survey.answers;
    this.totalSurvey = survey;
    this.game = game;
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
    this.currentPlayer = this.game.roundCounter
  }

  startRound() {
    setStartingPlayer();
    let newRound
    if (!game.usedSurveyIds.includes(this.totalSurvey.id)) {
      // need to instantiate new round parameters with values from API
      newRound = new Round(survey, players, game);
    }
  }
}

export default Round;
