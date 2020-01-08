import $ from 'jquery';
import {clearInput, updatePlayerTotalScore} from './domUpdates.js';

class Player {
  constructor(playerName, playerNum) {
    this.totalPoints = 0;
    this.lastCorrectGuessPoints = 0;
    this.name = playerName;
    this.playerNum = playerNum;
    this.incorrectGuesses = [];
    this.multiplier = 0;
  }
  makeGuess(playerGuess, survey) {
    let trueFalse = survey.checkGuess(playerGuess)
    if(trueFalse) {
      clearInput(this.playerNum);
      this.addPoints(survey.findPoints(playerGuess));
      updatePlayerTotalScore(this.playerNum, this.totalPoints);
      return [trueFalse, playerGuess];
    } else {
      clearInput(this.playerNum);
      this.incorrectGuesses.push(playerGuess);
      return [trueFalse, playerGuess];
    }
  }
  addPoints(pointValue) {
    this.totalPoints += pointValue;
    this.lastCorrectGuessPoints = pointValue;
  }
  setMultiplier(pickedMultiplier) {
    this.multiplier = pickedMultiplier;
  }
  clearIncorrectGuess() {
    this.incorrectGuesses = [];
  }
}

export default Player;
