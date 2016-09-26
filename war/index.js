var deck = require('./deck.js');
var utils = require('./utils.js');
var prompt = require('prompt');
var colors = require('colors');

index = {};

index.playTheGame = function() {
    while (this.playerOne.deck.length < 52 || this.playerTwo.deck.length < 52) {
        utils.turn(this.playerOne.deck[0], this.playerTwo.deck[0]);
        console.log(this.playerOne.name.green + " has " + this.playerOne.deck.length + " cards");
        console.log(this.playerTwo.name.blue + " has " + this.playerTwo.deck.length + " cards");
        if (this.playerOne.deck.length == 52) {
            console.log(this.playerOne.name.rainbow + " has won!".rainbow.bold.underline);
            break;
        } else if (this.playerTwo.deck.length == 52) {
            console.log(this.playerTwo.name.rainbow + " has won!".rainbow.bold.underline);
            break;
        } else {
            continue;
        }
    }
};

prompt.message = colors.cyan("User Input Requigreen: ");
prompt.start();
prompt.get(['name1', 'name2'], function(err, result) {
    console.log('Hello '.bold + result.name1.bold + " and ".bold + result.name2.bold + ", we are going to play War.".bold);
    console.log(result.name1.green + ' will be Player One'.bold + '\nand ' + result.name2.blue + ' will be Player Two'.bold);
    index.playerOne = new utils.createPlayer(result.name1, deck.playerOneDeck);
    index.playerTwo = new utils.createPlayer(result.name2, deck.playerTwoDeck);
    prompt.get(['\nShall we begin? Press <Enter> to start'], function(err, result) {
        index.playTheGame();
    });
});
