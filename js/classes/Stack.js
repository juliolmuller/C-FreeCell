
class Stack {

  constructor() {
    this.items = {}
  }

  /**
   * Add ne object to the stack.
   * @param {any} item Object to add to the top of the stack.
   */
  push(item) {
    item.next = this.items
    this.items = item
  }

  /**
   * Remove the top object of the stack
   */
  pop() {
    let item = this.items
    this.items = this.items.next
    item.next = undefined
    return item
  }
}
