
const VALUES = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const SUITS = ['&diams;', '&spades;', '&hearts;', '&clubs;']

class PlayingCards extends Stack {

  /**
   * @param {number} quantitySets Quantidade de baralhos da partida.
   */
  constructor(quantitySets = 1) {
    this.cards = this.items
    this.quantityCards = 52 * quantitySets
    this.shuffle()
  }

  /**
   * Randomly shuffle the cards in the stack of playing cards.
   */
  shuffle() {
    this.cards = {}
    let cards = new Array(this.quantityCards)
    for (let suit of SUITS) {
      for (let value of VALUES) {
        while (true) {
          let random = Math.floor(Math.random() * this.quantityCards)
          if (!cards[random]) {
            cards[random] = new Card(value, suit)
            this.push(cards[random])
            break
          }
        }
      }
    }
  }
}
