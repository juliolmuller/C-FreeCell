
/**
 * Class to build a stack of playing cards and individual resources.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.2.0
 */
class PlayingCards extends Stack {

  /**
   * Instances an object of stack of cards.
   * @constructor
   */
  constructor() {
    super()
    this.VALUES = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    this.SUITS = ['diamonds', 'spades', 'hearts', 'clubs']
    this.quantityCards = 52
  }
}
