
// Instance stacks of distribution
const STACKS_QNTY = 8
const stacks = Array.from(new Array(STACKS_QNTY), () => new Stack())
const freeCells = Array.from(new Array(4), () => new Stack(new Card(null, null)))
const deposits = Array.from(new Array(4), (value, index) => new Stack(new Card(null, Deck.SUITS[index])))

// Instance a new deck and distribute shuffled cards on stacks
const deck = new Deck()
for (let i = 0; i < Deck.QUANTITY; i++) {
  let j = i % STACKS_QNTY
  stacks[j].push(deck.pop())
}
