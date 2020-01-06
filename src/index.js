// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


import './scripts/domUpdates.js';

// console.log('This is the JavaScript entry file - your code begins here.');

import Game from '../src/scripts/Game.js';
import Player from '../src/scripts/Player.js';

let game;
let newPlayer1;
let newPlayer2;

function getData() {
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
 .then(response => response.json())
 .then(data => startNewGame(data.data))
 .catch(error => console.log(error));
}
getData();

function startNewGame(data) {
  game = new Game(data);
}

$('.prepare-self').click(function() {
  newPlayer1 = new Player($('#player1').val(), 1);
  newPlayer2 = new Player($('#player2').val(), 2);
  game.players = [newPlayer1, newPlayer2];
})
