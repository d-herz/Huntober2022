//Standup 02-02-2023 & 02-03-2023

//From "Stacks & Queues | Data Structures in JavaScript"
//https://www.youtube.com/watch?v=1AJ4ldcH2t4

//Implementing a "Stack" Data Structure with Array methods:
const stack = []

// .push(): Add items to end of array
stack.push("Dog")
stack.push("Cat")
stack.push("Bear")
//stack=== ["Dog", "Cat", "Bear"]

//.pop(): returns last array item
stack.pop() // "Bear"
//stack=== ["Dog", "Cat"]

//Peak: to view the last array item 
stack[stack.length - 1] //"Cat"

//Implementing a "Stack" Data Structure with a Class and methods:
class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }
  //push: add item to front of array
  push(element) {
    this.size++
    this.storage[this.size] = element
  }

  //pop: remove item from end of array
  pop() {
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size--
    return removed
  }

  //peek
  peek() {
    return this.storage[this.size]
  }
}

const stack2 = new Stack()

stack2.push('dog')
stack2.push('cat')
stack2.push('bear')

stack2.pop()
stack2.peek()


//Implementing a "Queue" Data Structure with Array methods:
const queue = []

//enqueue: .push() adds item to end of array
queue.push('seahorse')
queue.push('dolphin')
queue.push('whale shark')

//dequeue: .shift() removes & returns item from front of array
//Shift is less optimized due to linear complexity (class/object shown below is better approach)
queue.shift('') //"seahorse"
queue.shift('') //"dolphin"


//Implementing a "Queue" Data Structure with a Class and methods:
class Queue{
  constructor(){
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  //enqueue: adding through the back/tail
  enqueue (element){
    this.storage[this.tail] = element
    this.tail++
  }

  //dequeue: return/remove element from front/head 
  dequeue (){
    let removed = this.storage[this.head] 
    delete this.storage[this.head]
    this.head++
    return removed
  }

  size() {
    let size = this.tail - this.head
    return size > 0 ? size : 0
  }
}

const queue2 = new Queue()

queue2.enqueue("seahorse")
queue2.enqueue("doplhin")
queue2.enqueue("whale shark")

queue2.dequeue()// "seahorse"
queue2.dequeue()// "dolphin"


//Leon's Queue class constructor
// class Queue {
//   constructor() {
//     this.list = []
//   }

//   size() {
//     return this.list.length
//   }

//   enqueue(item) {
//     this.list.push(item)
//     //push an item to the back: FIFO
//   }

//   dequeue() {
//     return this.list.shift()
//     //remove from the front of array
//   }
// }
//use objects instead of arrays, to optimize not using .shift() which is O(n). Memorize the solution from beatrix's video. - Leon