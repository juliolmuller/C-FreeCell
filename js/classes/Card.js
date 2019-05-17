
class Card {

  /**
   * @param {string} value Card Value.
   * @param {string} suit Card suit.
   * @param {Card} next If in a stack, indicates the next card.
   */
  constructor(value, suit, next = null) {
    this.value = value
    this.suit = suit
    this.next = next
  }
}
