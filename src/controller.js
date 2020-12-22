import Card from './classes/Card'
import Deck from './classes/Deck'
import { stacks, freeCells, deposits, sounds } from './config'

const Controller = function () {
  const vm = this

  const toArray = (stack) => {
    const arr = []
    let aux = stack.items
    let index = 0

    if (!aux) {
      return arr
    }

    do {
      arr.unshift({ ...aux })
      delete arr[index]._next
      aux = aux._next
      index++
    } while (aux !== undefined)

    return arr
  }

  const getStack = (label) => {
    switch (label.toLowerCase()) {
      case 'freecell':
        return freeCells
      case 'deposit':
        return deposits
      case 'stack':
        return stacks
      default:
        return null
    }
  }

  const update = () => {
    let sum = -4
    const victoryElement = document.querySelector('.my-victory')
    const buttons = document.querySelectorAll('button.btn-primary')

    vm.freeCells.forEach((_, index) => vm.freeCells[index] = toArray(freeCells[index]))
    vm.deposits.forEach((_, index) => vm.deposits[index] = toArray(deposits[index]))
    vm.stacks.forEach((_, index) => vm.stacks[index] = toArray(stacks[index]))
    vm.deposits.forEach((value) => sum += value.length)

    if (sum === Deck.QUANTITY) {
      sounds.victory.play()
      victoryElement.style.display = 'block'
    }

    if (buttons.length) {
      let checkEnd = true

      buttons.forEach((btn) => {
        if (!btn.disabled) {
          checkEnd = false
        }
      })

      if (checkEnd) {
        sounds.failure.play()
      }
    }
  }

  vm.select = (stack, stackIndex, where = 'stack') => {
    sounds.cardFlip.play()
    stack = getStack(where)
    vm.lastStack = [stackIndex, where]
    vm.isSelected = !vm.isSelected
    vm.moving = stack[stackIndex].pop()
    update()
  }

  vm.place = (stackIndex, where = 'stack') => {
    sounds.cardFlip.play()
    const stack = getStack(where)
    vm.isSelected = !vm.isSelected
    stack[stackIndex].push(vm.moving)
    vm.lastStack = new Array(2)
    vm.moving = undefined
    update()
  }

  vm.isEmpty = (stack, isCell = false) => {
    if (isCell) {
      return !(stack.length > 1)
    }

    return !stack.length
  }

  vm.isPlacable = (stack, stackIndex, isCell = false) => {
    if (((vm.lastStack[1] === 'stack' && !isCell) || (vm.lastStack[1] !== 'stack' && isCell)) && vm.lastStack[0] === stackIndex) {
      return true
    }
    if (!vm.moving) {
      return false
    }
    if (isCell) {
      if (vm.moving.suit !== stack[0].suit) {
        return false
      }
      if (Card.VALUES.indexOf(vm.moving.value) !== stack.length - 1) {
        return false
      }
    } else {
      if (vm.moving.color === vm.lastOf(stack).color) {
        return false
      }
      if (Card.VALUES.indexOf(vm.moving.value) !== Card.VALUES.indexOf(vm.lastOf(stack).value) - 1) {
        return false
      }
    }

    return true
  }

  vm.lastOf = (array) => {
    return array[array.length - 1]
  }

  vm.lastStack = new Array(2)
  vm.moving = undefined
  vm.isSelected = false
  vm.freeCells = new Array(freeCells.length).fill(null)
  vm.deposits = new Array(deposits.length).fill(null)
  vm.stacks = new Array(stacks.length).fill(null)

  update()
  sounds.start.play()
}

export default Controller
