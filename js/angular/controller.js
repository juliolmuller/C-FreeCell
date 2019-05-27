(function() {
  'use strict'

  /**
   * Configure main application controller
   */
  MY_APP.controller('myController', function() {

    // Define local constants
    const vm = this

    // Function to convert a stack into a traditional array
    function toArray(stack) {
      const arr = []
      if (!stack.items)
        return arr
      let aux = stack.items
      let index = 0
      do {
        arr.unshift(Object.assign({}, aux))
        delete arr[index]._next
        aux = aux._next
        index++
      } while (aux !== undefined)
      return arr
    }

    // Function to select the stack structure according to label
    function getStack(label) {
      switch (label.toLowerCase()) {
        case 'freecell':
          return freeCells
        case 'deposit':
          return deposits
        case 'stack':
          return stacks
      }
    }

    // Method tp update stacks as traditional arrays
    function update() {
      vm.freeCells.forEach((value, index, arr) => arr[index] = toArray(freeCells[index]))
      vm.deposits.forEach((value, index, arr) => arr[index] = toArray(deposits[index]))
      vm.stacks.forEach((value, index, arr) => arr[index] = toArray(stacks[index]))
      let sum = -4
      vm.deposits.forEach((value) => sum += value.length)
      if (sum == Deck.QUANTITY) {
        victorySound.play()
        document.querySelector('.my-victory').style.display = 'block'
      }
      let buttons = document.querySelectorAll('button.btn-primary')
      if (buttons.length) {
        let checkEnd = true
        buttons.forEach(elem => {
          if (!elem.disabled)
            checkEnd = false
        })
        if (checkEnd) {
          failureSound.play()
        }
      }
    }

    // Event when clicking the button 'SELECT'
    vm.select = function(stack, stackIndex, where = 'stack') {
      cardFlip.play()
      stack = getStack(where)
      vm.lastStack = [stackIndex, where]
      vm.isSelected = !vm.isSelected
      vm.moving = stack[stackIndex].pop()
      update()
    }

    // Event when clicking the button 'PLACE'
    vm.place = function(stackIndex, where = 'stack') {
      cardFlip.play()
      const stack = getStack(where)
      vm.isSelected = !vm.isSelected
      stack[stackIndex].push(vm.moving)
      vm.lastStack = new Array(2)
      vm.moving = undefined
      update()
    }

    // Function to evaluate whether the stack is empty
    vm.isEmpty = function(stack, isCell = false) {
      if (isCell)
        return (stack.length > 1) ? false : true
      return stack.length ? false : true
    }

    // Function to evaluate whether a card is placable in the stack
    vm.isPlacable = function(stack, stackIndex, isCell = false) {
      if (((vm.lastStack[1] == 'stack' && !isCell) || (vm.lastStack[1] != 'stack' && isCell)) && vm.lastStack[0] == stackIndex)
        return true
      if (!vm.moving) return false
      if (isCell) {
        if (vm.moving.suit != stack[0].suit)
          return false
        if (Card.VALUES.indexOf(vm.moving.value) != stack.length - 1)
          return false
      } else {
        if (vm.moving.color == vm.lastOf(stack).color)
          return false
        if (Card.VALUES.indexOf(vm.moving.value) != Card.VALUES.indexOf(vm.lastOf(stack).value) - 1)
          return false
      }
      return true
    }

    // Function to retrieve last element of an array
    vm.lastOf = function(array) {
      return array[array.length - 1]
    }

    // Initialize application properties
    vm.lastStack = new Array(2)
    vm.moving = undefined
    vm.isSelected = false
    vm.freeCells = new Array(4).fill(null)
    vm.deposits = new Array(4).fill(null)
    vm.stacks = new Array(STACKS_QNTY).fill(null)

    // Run application initial state
    update()
  })

})()
