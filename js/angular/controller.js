(function() {
  'use strict'

  /**
   * Configure main application controller
   */
  MY_APP.controller('myController', function() {

    // Define local constants
    const vm = this

    // Initialize properties
    vm.STACKS_QNTY = 8
    vm.isSelected = false

    // Initialize free cells
    vm.freeCells = [
      { value: null, suit: null },
      { value: null, suit: null },
      { value: null, suit: null },
      { value: null, suit: null }
    ]

    // Initialize deposit cells
    vm.deposits = [
      { value: null, suit: 'diamonds' },
      { value: null, suit: 'spades' },
      { value: null, suit: 'hearts' },
      { value: null, suit: 'clubs' }
    ]

    // Instace objects and distribute cards throughout the stacks
    vm.deck = new Deck()
    vm.stacks = new Array(vm.STACKS_QNTY)
    for (let i = 0; i < vm.stacks.length; i++)
      vm.stacks[i] = new PlayingCards()
    for (let i = 0; i < vm.deck.size(); i++) {
      let j = i % vm.STACKS_QNTY
      vm.stacks[j].push(Object.assign({}, vm.deck.getByIndex(i)))
    }

    // Converts stacks into traditional arrays
    vm.arrays = new Array(vm.STACKS_QNTY)
    vm.toArray = () => {
      for (let i = 0; i < vm.STACKS_QNTY; i++) {
        vm.arrays[i] = vm.stacks[i].toArray()
      }
    }
    vm.toArray()

    // Configure selection buttons
    vm.select = stack => {
      vm.onMove = stack.pop()
      vm.toArray()
    }
  })

})()
