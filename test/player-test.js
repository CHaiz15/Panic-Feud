import chai from 'chai';
const expect = chai.expect;

import Player from '../src/scripts/Player.js';

describe('Player', () => {
  it('should be a function', function() {
  expect(Player).to.be.a('function');
});
})
