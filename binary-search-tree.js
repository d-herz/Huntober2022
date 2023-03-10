//https://www.youtube.com/watch?v=6JeuJRqKJrI

class Node {
  constructor(value) {
    this.value = value 
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1;
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++

    let newNode = new Node(value)
    
    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        }
        // if left child, look left again (recursive case)
        else {
          searchTree(node.left)
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode
        }
        // if right child, look right again (recursive case)
        else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  min() {
    let currentNode = this.root;

    // continue traversing left until no more children 
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  max() {
    let currentNode = this.root;

    // continue traversing right until no more children 
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  contains(value) {
    let currentNode = this.root

    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  // depth first search: branch by branch 

  // in -order
  // left, root, right
  dfsInOrder() {
    let result = [];

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)
      // capture root node value
      result.push(node.value)
      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }
    return result
  }

  // pre-order
  // root, left, right
  dfsPreOrder() {
    let result = [];

    const traverse = node => {
      // capture root node value
      result.push(node.value)
      // if left child exists, go left again
      if (node.left) traverse(node.left)
      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }
    return result
  }

  // post-order
  // left, right, root
  dfsPostOrder() {
    let result = [];

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)
      // if right child exists, go right again
      if (node.right) traverse(node.right)
      // capture root node value
      result.push(node.value)
    }
    return result
  }

  // breadth first search: level by levelt
  // 
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }

    }
    return result
  }
}

