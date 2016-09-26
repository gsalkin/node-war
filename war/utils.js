var deck = require('./deck.js');
var colors = require('colors');
var prompt = require('prompt');

var utils = {};

utils.createPlayer = function(name, deck) {
    return{
        name: name,
        deck: deck
    };
};

utils.rotateArray = function(scoreOne,scoreTwo) {
    if(scoreOne > scoreTwo) {
        var myCard = deck.playerOneDeck.shift();
        var theirCard = deck.playerTwoDeck.shift();
        deck.playerOneDeck.push(myCard, theirCard);
    } else if (scoreOne < scoreTwo) {
        var myCard2 = deck.playerTwoDeck.shift();
        var theirCard2 = deck.playerOneDeck.shift();
        deck.playerTwoDeck.push(myCard2, theirCard2);
    }
};

utils.war = function() {
    var tempCardOne = deck.playerOneDeck.shift();
    var tempCardTwo = deck.playerTwoDeck.shift();
    var tempArray = [];
    tempArray.push(tempCardOne,tempCardTwo);
    for (var i = 0; i < 52; i++) {
        if (true) {
            if(deck.playerOneDeck.length < 2) {
                console.log('Player One cannot win.  Player Two wins!'.rainbow);
                break;
            } else if(deck.playerTwoDeck.length < 2) {
                console.log('Player Two cannot win.  Player One wins!'.rainbow);
                break;
            }
        }
        console.log("Player One's".green + " card is " + deck.playerOneDeck[i].title.yellow.underline.bold + " and " + "Player Two's".blue + " card is " + deck.playerTwoDeck[i].title.yellow.underline.bold);

        if (deck.playerOneDeck[i].score > deck.playerTwoDeck[i].score) {
            var x = deck.playerOneDeck.shift();
            var y = deck.playerTwoDeck.shift();
            tempArray.push(x,y);
            console.log('Player One'.green + ' wins this battle!  Continue!');
            deck.playerOneDeck.push.apply(deck.playerOneDeck,tempArray);
            break;
        } else if (deck.playerOneDeck[i].score < deck.playerTwoDeck[i].score) {
            var a = deck.playerOneDeck.shift();
            var b = deck.playerTwoDeck.shift();
            tempArray.push(a,b);
            console.log('Player Two'.blue + ' wins this battle!  Continue!');
            deck.playerTwoDeck.push.apply(deck.playerTwoDeck,tempArray);
            break;
        } else {
            continue;
        }
    }
};

utils.compare = function(scoreOne, scoreTwo) {
    var score1 = scoreOne;
    var score2 = scoreTwo;
    if (score1 > score2) {
        console.log('Player One'.green + ' has won this round!');
        this.rotateArray(score1, score2);
    } else if(score1 < score2) {
        console.log('Player Two'.blue + ' has won this round!');
        this.rotateArray(score1,score2);
    } else if (score1 == score2) {
        console.log('Prepare for War... \n1\n2\n3!\nDraw!!!');
        this.war();
    }
};

utils.turn = function(cardOne, cardTwo) {
    console.log( "Player One's".green + " card is " + cardOne.title.yellow.underline.bold + " and " + "Player Two's".blue + " card is " + cardTwo.title.yellow.underline.bold);
    this.compare(cardOne.score, cardTwo.score);
};

module.exports = utils;
