import Node from "../classes/Node.js"
import SuperQueue from "./SuperQueue.js"
export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * @public
   * @returns true/false
   */
  isEmpty() {
    return this.root === null
  }

  /**
   *
   * @param {*} value
   */
  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  }

  /**
   * @private
   * @param {*} root
   * @param {*} newNode
   */
  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this._insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this._insertNode(root.right, newNode)
      }
    }
  }

  search(value) {
    return this._searchNode(this.root, value)
  }

  _searchNode(node, value) {
    if (node === null) {
      return false
    }

    if (value < node.value) {
      return this._searchNode(node.left, value)
    } else if (value > node.value) {
      return this._searchNode(node.right, value)
    } else {
      //if node.value === value
      return true
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.inOrder(root.left)
      this.inOrder(root.right)
      console.log(root.value)
    }
  }

  levelOrder() {
    //use the optimised queue implementaion
    const queue = new SuperQueue()
    queue.enqueue(this.root)
    while (queue.size()) {
      let curr = queue.dequeue()
      console.log(curr.value)
      if (curr.left) {
        queue.enqueue(curr.left)
      }
      if (curr.right) {
        queue.enqueue(curr.right)
      }
    }
  }

  /**
   *
   * @param {*} value
   */
  remove(value) {
    this.root = this._removeNode(this.root, value)
  }

  /**
   * @private
   * @param {*} node
   * @param {*} value
   * @returns
   */
  _removeNode(node, value) {
    if (node === null) {
      return null
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value)
      return node
    } else {
      // Case 1: No child nodes
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // Case 2: One child node
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // Case 3: Two child nodes
      const minNode = this._findMinNode(node.right)
      node.value = minNode.value
      node.right = this._removeNode(node.right, minNode.value)
      return node
    }
  }

  /**
   * @private
   * @param {*} node
   * @returns
   */
  _findMinNode(node) {
    if (node.left === null) {
      return node
    } else {
      return this._findMinNode(node.left)
    }
  }

  findMaxNode(root) {
    if (!root.right) {
      return root.value
    } else {
      return this.findMaxNode(root.right)
    }
  }
}
