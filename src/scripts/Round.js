import $ from 'jquery';
import Game from './Game.js';
import Survey from './Survey.js';


class Round {
  constructor(survey, players) {
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = undefined;
    this.players = players;
    this.guessFlag = false;
    this.currentSurvey = survey;
  }
  createSurvey() {
    let foundSurvey;
    let foundAnswers = [];
    let randomId = Math.floor(Math.random() * 15) + 1;
    this.currentSurvey.surveys.find(survey => {
      if (survey.id === randomId) {
        foundSurvey = survey;
      }
    })
    this.currentSurvey.answers.filter(answer => {
      if (answer.surveyId === randomId) {
        foundAnswers.push(answer);
      }
    })
    let surveyObject = {
      survey: foundSurvey,
      answers: foundAnswers
    }
    this.currentSurvey = new Survey(surveyObject);
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
