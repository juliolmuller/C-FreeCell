
/**
 * Class to encapsulate an object of card.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.1.2
 */
class Card {

  /**
   * Instance an object of card.
   * @param {string} value Card Value.
   * @param {string} suit Card suit.
   */
  constructor(value, suit) {
    if (value != null && suit != null)
      this.color = [Card.SUITS[0], Card.SUITS[2]].includes(suit) ? 'black' : 'red'
    this.value = value
    this.suit = suit
  }

  /**
   * Returns the available values for the cards
   */
  static get VALUES() { return ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'] }
  static set VALUES(v) {}

  /**
   * Returns the available suits for the cards
   */
  static get SUITS() { return ['clubs', 'hearts', 'spades', 'diamonds'] }
  static set SUITS(v) {}
}
