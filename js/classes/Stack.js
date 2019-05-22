
/**
 * Class to build objects as stack data structure.
 * @class
 * @author Julio Muller & Aurelio Matsunaga
 * @version 1.0.1
 */
class Stack {

  /**
   * Instances an object structured as stack.
   * @constructor
   * @param {object} items List of iterable items to be added to the stack.
   */
  constructor(...items) {
    this.items = undefined
    items.forEach(item => {
      this.push(item)
    })
  }

  /**
   * Adds a new object to the stack.
   * @param {object} item Object to add to the top of the stack.
   */
  push(item) {
    item._next = this.items
    this.items = item
  }

  /**
   * Removes the object int he top of the stack.
   * @returns {object}
   */
  pop() {
    let item = {}
    for (let prop in this.items)
      if (prop != '_next')
        item[prop] = this.items[prop]
    this.items = this.items._next
    return item
  }

  /**
   * Returns the quantity of items in the stack.
   * @returns {number}
   */
  size() {
    if (!this.items)
      return 0;
    let aux = this.items
    let count = 1
    while (aux._next !== undefined) {
      aux = aux._next
      count++
    }
    return count
  }

  /**
   * Returns the value in the (index+1)th position in the stack.
   * @param {number} index Index of the item in the structure (starting with 0)
   * @returns {object}
   */
  getByIndex(index) {
    index = this.size() - ++index
    let aux = this.items
    let count = 0
    while (count < index) {
      aux = aux._next
      count++
    }
    let item = {}
    for (let prop in aux)
      if (prop != '_next')
        item[prop] = aux[prop]
    return aux
  }
}
