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
        case 'freecells':
          return freeCells
        case 'deposit':
        case 'deposits':
          return deposits
        case 'stack':
        case 'stacks':
          return stacks
      }
    }

    // Method tp update stacks as traditional arrays
    function update() {
      vm.freeCells.forEach((value, index, arr) => arr[index] = toArray(freeCells[index]))
      vm.deposits.forEach((value, index, arr) => arr[index] = toArray(deposits[index]))
      vm.stacks.forEach((value, index, arr) => arr[index] = toArray(stacks[index]))
    }

    // Event when clicking the button 'SELECT'
    vm.select = function(stackIndex, where = 'stack') {
      const stack = getStack(where)
      vm.isSelected = !vm.isSelected
      vm.moving = stack[stackIndex].pop()
      update()
    }

    // Event when clicking the button 'PLACE'
    vm.place = function(stackIndex, where = 'stack') {
      const stack = getStack(where)
      vm.isSelected = !vm.isSelected
      stack[stackIndex].push(vm.moving)
      vm.moving = undefined
      update()
    }

    // Function to evaluate whether the stack is empty
    vm.isEmpty = function(stack, isCell = false) {
      if (isCell)
        return (stack.length > 1) ? false : true
      return stack.length ? false : true
    }

    // Function to retrieve last element of an array
    vm.lastOf = function(array) {
      return array[array.length - 1]
    }

    // Initialize application properties
    vm.moving = undefined
    vm.isSelected = false
    vm.freeCells = new Array(4).fill(null)
    vm.deposits = new Array(4).fill(null)
    vm.stacks = new Array(STACKS_QNTY).fill(null)

    // Run application initial state
    update()
  })

})()
