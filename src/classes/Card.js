
class Card {
  constructor(value, suit) {
    if (value === undefined || suit === undefined) {
      throw new Error('Arguments "value" and "suit" must be provided to Card constructor.')
    }

    // const validValue = Card.VALUES.includes(value)
    // const validSuit = Card.SUITS.includes(suit)

    // if (!validValue || !validSuit) {
    //   throw new Error(
    //     'Invalid value or suit provided. \n'
    //     + `    Expected one in ${validSuit ? Card.VALUES : Card.SUITS} \n`
    //     + `    Received "${validSuit ? value : suit}" \n`,
    //   )
    // }

    this.value = value
    this.suit = suit
    this.color = [Card.SUITS[0], Card.SUITS[2]].includes(suit) ? 'black' : 'red'
  }

  static get VALUES() {
    return ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  }

  static get SUITS() {
    return ['clubs', 'hearts', 'spades', 'diamonds']
  }
}

export default Card
