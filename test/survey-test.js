import chai from 'chai';
const expect = chai.expect;

import Survey from '../src/scripts/Survey.js';

describe('Survey:', () => {
  let survey;
  let data = {
    surveys: [{
      id: 1,
      question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?'
    }, ],
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
  let playerGuess;
  beforeEach(() => {
    survey = new Survey(data);
  });
  it('should be a function', function() {
    expect(Survey).to.be.a('function');
  });
  describe('Default Values:', () => {
    it('should have a survey id', function() {
      expect(survey.id).to.equal(1);
    });
    it('should have a survey question', function() {
      expect(survey.question).to.equal('If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?');
    });
    it('should have an array of answers', function() {
      expect(survey.answers).to.equal(data.answers)
    });
    describe('Method Values:', () => {
      it('should return true/flase whether the players guess is included', function() {
        playerGuess = 'Beer';
        expect(survey.checkGuess(playerGuess)).to.equal(true);
        playerGuess = 'A dog';
        expect(survey.checkGuess(playerGuess)).to.equal(false);
      });
      it('should return the number of associated respondents to the answer', function() {
        playerGuess = 'Beer';
        expect(survey.findPoints(playerGuess)).to.equal(67);
      });
    });
  });
});
