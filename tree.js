/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(root) {
    if (!root) {
      return 0;
    }

    let totalSum = root.value;

    for (let child of root.children) {
      totalSum += sumOfIntegers(child);
    }
    return totalSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(root) {
    if (!root) {
      return 0;
    }

    let count = root.value % 2 === 0 ? 1 : 0;

    for (let child of root.children) {
      count += countEvenIntegers(child);
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }

    let count = root.value > lowerBound ? 1 : 0;

    for (let child of this.root.children) {
      count += countNodesGreaterThanX(child, x);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
