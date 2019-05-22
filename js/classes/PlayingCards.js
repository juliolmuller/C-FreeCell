
/**
 * Class to build a stack of cards and individual resources.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.1.0
 */
class PlayingCards extends Stack {

  /**
   * Instances an object of stack of cards.
   * @constructor
   */
  constructor() {
    super()
    this.VALUES = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    this.SUITS = ['&diams;', '&spades;', '&hearts;', '&clubs;']
    this.quantityCards = 52
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
