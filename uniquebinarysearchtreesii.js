//Objective is to return all valid BST's given 'n' nodes in a tree

class Node {
    constructor(val, left, right) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(val, null, null)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(val, null, null)
    }
  
    addRightNode(node, val) {
      node.right = new Node(val, null, null)
    }
}


//O(4^n / sqrt(n)) solution where n is the given value
//We use recursion to generate all possible BST's

function generateTrees(n, l = 1, r = n) {
    if (n == 0) {
        return []
    }
    
    let result = []
    
    for (let i = l; i <= r; i++) {
        for (let left of generateTrees(n, l, i - 1)) {
            for (let right of generateTrees(n, i + 1, r)) {
                result.push(new Node(i, left, right))
            }
        }
    }
    
    return result.length ? result : [null]
}
return generateTrees(3)