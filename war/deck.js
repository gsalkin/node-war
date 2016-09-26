var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
var ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var scoreCalc = function(cardRank) {
        for (var x = 0; x < 13; x++) {
            if (cardRank === ranks[x]) {
                return x + 1;
            }
        }
    };

var Card = function(rank, suit) {
    return {
        rank: rank,
        suit: suit,
        title: rank + ' of ' + suit,
        score: scoreCalc(rank)
    };
};

var deck = function() {
    return {
        cards: [],
        deckAssembly: function() {
            for (var i = 0; i < ranks.length; i++) {
                for (var j = 0; j < suits.length; j++) {
                    var newCard = new Card(ranks[i],suits[j]);
                    this.cards.push(newCard);
                }
            }
        },
        shuffle: function() {
            for (var i = this.cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
            return this.cards;
        },
    };
};
var gameDeck = new deck();
gameDeck.deckAssembly();
gameDeck.shuffle();

var subDeck1 = gameDeck.cards.slice(0,26);
var subDeck2 = gameDeck.cards.slice(26,52);

module.exports.playerOneDeck = subDeck1;
module.exports.playerTwoDeck = subDeck2;
