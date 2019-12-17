import chai from 'chai';
const expect = chai.expect;

import Player from '../src/scripts/Player.js';

describe('Player:', () => {
  let player;
  let name = 'Caleb';

  beforeEach(() => {
    player = new Player(name);
  });
    it('should be a function', function() {
      expect(Player).to.be.a('function');
    });

    describe('Default Values:', () => {
    it('should store the name of the player', function() {
      expect(player.name).to.equal('Caleb');
    });
  })
})
