
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
    Deck.SUITS.forEach(suit => {
      Deck.VALUES.forEach(value => {
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
   * Returns the available values for the cards
   */
  static get VALUES() { return ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'] }
  static set VALUES(v) {}

  /**
   * Returns the available suits for the cards
   */
  static get SUITS() { return ['diamonds', 'spades', 'hearts', 'clubs'] }
  static set SUITS(v) {}

  /**
   * Returns the amount of cards available in the deck.
   */
  static get QUANTITY() { return 52 }
  static set QUANTITY(v) {}
}
