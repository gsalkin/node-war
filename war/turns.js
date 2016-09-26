var deck = require('./deck.js');
var utils = require('./utils.js');

var scoreCalc = function(card) {
    var rank = card.substring(' ');
    for (var i = 0; i < 13; i++) {
        if(rank === deck.ranksArray[i]);
        return i + 1;
        }
    };

var playerOne = function(){
    return {
        card: deck.playerOneDeck[0],
        score: scoreCalc(card)
    }
};
var test = playerOne();
// var playerTwo = {
//     card: deck.playerTwoDeck[i]
// };
console.log(test.card);
console.log(test.score);


//
// var drawCard = function() {
//     return {
//         name:
//     }
// }
//
//     console.log(playerOneDeck[i]);
//     console.log(playerTwoDeck[i]);
//     i++;
//     scoreCalc()
// }
