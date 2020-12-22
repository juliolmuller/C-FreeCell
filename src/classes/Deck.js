import Card from './Card'
import Stack from './Stack'

class Deck extends Stack {
  constructor() {
    super()
    this.shuffle()
  }

  shuffle() {
    this.items = null
    const cards = new Array(Deck.QUANTITY)

    Card.SUITS.forEach((suit) => {
      Card.VALUES.forEach((value) => {
        while (true) {
          const random = Math.floor(Math.random() * Deck.QUANTITY)

          if (!cards[random]) {
            cards[random] = new Card(value, suit)
            break
          }
        }
      })
    })

    cards.forEach((card) => this.push(card))
  }

  static get QUANTITY() {
    return 52
  }
}

export default Deck
