import $ from 'jquery';
import Game from './Game.js';
import Survey from './Survey.js';
import {enableAnswerInput, disableAnswerInput, updatePlayerRoundScore} from './domUpdates.js';


class Round {
  constructor(survey, players, startingPlayer) {
    this.points = {player1: 0, player2: 0}
    this.currentPlayer = startingPlayer;
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
  takeTurn(guessResult, survey) {
    let selectedPlayer = this.players[parseInt(this.currentPlayer - 1)];
    let trueFalse = selectedPlayer.makeGuess(guessResult, survey);
    let player = this.players.filter(player => {
      return player.playerNum !== this.currentPlayer;
    })
    if (trueFalse) {
      this.guessFlag = true;
      this.addPlayerRoundScore(selectedPlayer);
    } else {
      this.guessFlag = false;
      disableAnswerInput(this.currentPlayer);
      this.currentPlayer = player[0].playerNum;
      enableAnswerInput(this.currentPlayer);
    }
  }

  addPlayerRoundScore(selectedPlayer) {
    this.points[`player${this.currentPlayer}`] += selectedPlayer.lastCorrectGuessPoints;
    updatePlayerRoundScore(this.currentPlayer, this.points[`player${this.currentPlayer}`]);
  }
}

export default Round;
