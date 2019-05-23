
/**
 * Class to build a complete deck of playing cards required for a game.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.0.0
 */
class Deck extends PlayingCards {

  /**
   * Instances an object of deck of playing cards.
   * @constructor
   */
  constructor() {
    super()
    this.shuffle()
  }

  /**
   * Randomly shuffle the cards in the stack of playing cards.
   */
  shuffle() {
    this.cards = {}
    let cards = new Array(this.quantityCards)
    for (let suit of this.SUITS) {
      for (let value of this.VALUES) {
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
