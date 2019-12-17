import chai from 'chai';
const expect = chai.expect;

import Game from '../src/scripts/Game.js';

describe('Game', () => {
  it('should be a function', function() {
  expect(Game).to.be.a('function');
});
})
