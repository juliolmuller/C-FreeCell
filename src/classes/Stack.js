
class Stack {
  constructor(...items) {
    this.items = undefined

    items.forEach((item) => {
      this.push(item)
    })
  }

  push(item) {
    item._next = this.items
    this.items = item
  }

  pop() {
    const { _next, ...item } = this.items
    this.items = this.items._next

    return item
  }

  size() {
    if (!this.items) {
      return 0
    }

    let aux = this.items
    let count = 1

    while (aux._next !== undefined) {
      aux = aux._next
      count++
    }

    return count
  }

  getByIndex(index) {
    const innerIndex = this.size() - index + 1
    let aux = this.items
    let count = 0

    while (count < innerIndex) {
      aux = aux._next
      count++
    }

    return aux
  }
}

export default Stack
