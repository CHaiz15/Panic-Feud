import $ from 'jquery';

class Player {
  constructor(name, playerNum) {
    this.totalPoints = 0;
    this.name = name;
    this.playerNum = playerNum;
    this.incorrectGuesses = [];
    this.multiplier = 0;
  }
  makeGuess(playerGuess, survey) {
    if(survey.checkGuess(playerGuess)) {
      this.addPoints(survey.findPoints(playerGuess))
    } else {
      this.incorrectGuesses.push(playerGuess);
    }
  }
  addPoints(pointValue) {
    this.totalPoints += pointValue;
  }
  setMultiplier(pickedMultiplier) {
    this.multiplier = pickedMultiplier;
  }
  clearIncorrectGuess() {
    this.incorrectGuesses = [];
  }
}

export default Player;
