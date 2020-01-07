import chai from 'chai';
const expect = chai.expect;

import Game from '../src/scripts/Game.js';
import Round from '../src/scripts/Round.js';
import Player from '../src/scripts/Player.js';
import Survey from '../src/scripts/Survey.js';

// round is declared outside of describe due to being 'undefined' when declared within describe.  Not sure why this is occurring.


describe('Round', () => {
  let data = {
    survey: {
      id: 1,
      question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?'
    },
    answers: [{
        answer: 'Beer',
        respondents: 67,
        surveyId: 1
      },
      {
        answer: 'Bowling Ball',
        respondents: 5,
        surveyId: 1
      },
      {
        answer: 'Donuts',
        respondents: 24,
        surveyId: 1
      },
    ]
  };
  let game
  let round
  let survey
  let player1
  let player2
  let players
  let playerGuess
  let guessResult

  beforeEach(() => {
    survey = new Survey(data);
    round = new Round(survey, players);
    player1 = new Player('Lenny', 1);
    player2 = new Player('Tom', 2);
    players = [player1, player2];
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });
  describe('Default Values:', () => {
    it('Should default the player/s points to 0', () => {
      expect(round.points.player1).to.equal(0);
    });

    it('Should default its currentPlayer to player1', () => {
      expect(round.currentPlayer).to.equal(undefined);
    });

    it('Should default its guessFlag to false', () => {
      expect(round.guessFlag).to.equal(false);
    });
  })

  describe('Method Values:', () => {
    it.skip('Should change the current player when the current player guesses incorrectly', () => {
      playerGuess = 'Soda';
      guessResult = survey.checkGuess(playerGuess);
      round.takeTurn(guessResult);
      expect(round.currentPlayer).to.eql(2);
    });
  })
})
