
// Configure variables for sounding
new Audio('./audio/card-shuffle.mp3').play()
const cardFlip = new Audio('./audio/card-flip.mp3')
const victorySound = new Audio('./audio/victory.mp3')
const failureSound = new Audio('./audio/failure.mp3')

// Instance stacks of distribution
const STACKS_QNTY = 8
const stacks = Array.from(new Array(STACKS_QNTY), () => new Stack())
const freeCells = Array.from(new Array(4), () => new Stack(new Card(null, null)))
const deposits = Array.from(new Array(4), (value, index) => new Stack(new Card(null, Card.SUITS[index])))

// Instance a new deck and distribute shuffled cards on stacks
const deck = new Deck()
for (let i = 0; i < Deck.QUANTITY; i++) {
  let j = i % STACKS_QNTY
  stacks[j].push(deck.pop())
}
