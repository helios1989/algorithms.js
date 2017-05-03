class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  inOrderTraverse(callback) {
    if (!this.left && !this.right) return callback(this);

    if (this.left) this.left.inOrderTraverse(callback);
    callback(this);
    if (this.right) this.right.inOrderTraverse(callback);
  }

  validate() {
    let flag = true;
    let previousNodeValue = Number.MIN_SAFE_INTEGER;

    let checkOrder = node => {
      if (flag === false) return;
      if (previousNodeValue > node.value) {
        flag = false;
        return;
      }
      previousNodeValue = node.value;
    }

    this.inOrderTraverse(checkOrder);
    return flag;
  }
}

/**
 * Tests
 */
const assert = (expect, describe) => expect
  ? console.log('Test Passed:', describe)
  : console.error('Test Failed:', describe);

let BST1 = new BST(4);
BST1.left = new BST(2);
BST1.right = new BST(6);
BST1.left.left = new BST(1);
BST1.left.right = new BST(3);
BST1.right.right = new BST(7);
BST1.right.left = new BST(5);

let BST2 = new BST(4);
BST2.left = new BST(2);
BST2.right = new BST(6);
BST2.left.left = new BST(1);
BST2.left.right = new BST(5);
BST2.right.right = new BST(7);
BST2.right.left = new BST(5);

let sorted = [];
let pushToSorted = node => sorted.push(node.value);
BST1.inOrderTraverse(pushToSorted);

assert(
  [1,2,3,4,5,6,7].every((val,i) => val === sorted[i]),
  'inOrderTraverse should execute callback on every node in order'
);

assert(
  BST1.validate() === true, 
  'validate should return true for valid BST'
);

assert(
  BST2.validate() === false, 
  'validate should return false for invalid BST'
);