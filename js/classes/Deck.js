
/**
 * Class to build a complete deck of playing cards required for a game.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.0.4
 */
class Deck extends Stack {

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
    this.items = undefined
    const cards = new Array(Deck.QUANTITY)
    Card.SUITS.forEach(suit => {
      Card.VALUES.forEach(value => {
        while (true) {
          let random = Math.floor(Math.random() * Deck.QUANTITY)
          if (!cards[random]) {
            cards[random] = new Card(value, suit)
            break
          }
        }
      })
    })
    cards.forEach(card => this.push(card))
  }

  /**
   * Returns the amount of cards available in the deck.
   */
  static get QUANTITY() { return 52 }
  static set QUANTITY(v) {}
}
