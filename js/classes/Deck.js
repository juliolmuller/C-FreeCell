
/**
 * Class to build a complete deck of playing cards required for a game.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.0.2
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
    this.items = undefined
    const cards = new Array(this.quantityCards)
    this.SUITS.forEach(suit => {
      this.VALUES.forEach(value => {
        while (true) {
          let random = Math.floor(Math.random() * this.quantityCards)
          if (!cards[random]) {
            cards[random] = new Card(value, suit)
            break
          }
        }
      })
    })
    cards.forEach(card => this.push(card))
  }
}
