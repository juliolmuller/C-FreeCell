import startSound from './assets/audio/card-shuffle.mp3'
import cardFlipSound from './assets/audio/card-flip.mp3'
import victorySound from './assets/audio/victory.mp3'
import failureSound from './assets/audio/failure.mp3'
import Card from './classes/Card'
import Deck from './classes/Deck'
import Stack from './classes/Stack'

export const sounds = {
  start: new Audio(startSound),
  cardFlip: new Audio(cardFlipSound),
  victory: new Audio(victorySound),
  failure: new Audio(failureSound),
}

export const freeCells = Array.from(new Array(4), () => {
  return new Stack(new Card(null, null))
})

export const deposits = Array.from(new Array(4), (_, index) => {
  return new Stack(new Card(null, Card.SUITS[index]))
})

export const stacks = Array.from(new Array(8), () => {
  return new Stack()
})

const deck = new Deck()

for (let i = 0; i < Deck.QUANTITY; i++) {
  stacks[i % 8].push(deck.pop())
}
