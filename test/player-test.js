import chai from 'chai';
const expect = chai.expect;

import Player from '../src/scripts/Player.js';
import Survey from '../src/scripts/Survey.js';


describe('Player:', () => {
  let playerGuess;
  let survey;
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
  let player1;
  let playerName = 'Caleb';
  let playerNum = 1;
  beforeEach(() => {
    player1 = new Player(playerName, playerNum);
  });
  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  describe('Default Values:', () => {
    it('should start with 0 total points', function() {
      expect(player1.totalPoints).to.equal(0);
    });
    it('should store the name of the player', function() {
      expect(player1.name).to.equal('Caleb');
    });
    it('should have a playerNum', function() {
      expect(player1.playerNum).to.equal(1);
    });
    it('should start with an empty array of incorrectGuesses', function() {
      expect(player1.incorrectGuesses).to.deep.equal([]);
    });
    it('should start with a 0 multiplier', function() {
      expect(player1.multiplier).to.equal(0);
    });
    describe('Method Values:', () => {
      it('should addPoints to totalPoints', function() {
        player1.addPoints(10);
        expect(player1.totalPoints).to.equal(10);
      });
      it('should add points if guess is true', function() {
        survey = new Survey(data);
        playerGuess = 'beer';
        player1.makeGuess(playerGuess, survey);
        expect(player1.totalPoints).to.equal(67);
      });
      it('should push guess to incorrectGuesses if guess is false', function() {
        survey = new Survey(data);
        playerGuess = 'A dog';
        player1.makeGuess(playerGuess, survey);
        expect(player1.incorrectGuesses.length).to.equal(1);
      });
      it('should set multiplier as picked by the user', function() {
        let pickedMultiplier = 3;
        player1.setMultiplier(pickedMultiplier)
        expect(player1.multiplier).to.equal(3);
      });
      it('should clear incorrectGuesses', function() {
        survey = new Survey(data);
        playerGuess = 'A dog';
        player1.makeGuess(playerGuess, survey);
        player1.clearIncorrectGuess();
        expect(player1.inccorrectGuesses).to.deep.equal();
      });
    })
  })
})
