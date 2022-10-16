const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  // class Node {
  //   constructor(data) {
  //     this.data = data;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }
  constructor() {
    this.main = null;//this.root -> coflict with method root ???
}

root() {
    // if(this.main)return this.main
    // if(!this.main)???
    return this.main;
  
}

add(data) {
    const node =  new Node(data);
    if (!this.main) {
    this.main =  node;

return 0;
    }

    let current=this.main;

    while (true) {
    if (node.data < current.data) {
    if (!current.left) {
    current.left=node;
    // current.right=node;
        return 0;
    }
        // current = current.right;
        current=current.left;
        } else {
            if (!current.right) {
                current.right=node;

                return 0;
            }
            // current = current.left
            current =  current.right

        }
    }
}

has(data) {
    let current = this.main;
    while (current ) {
                if ((data === current.data) === true) {
                    return true
                } if ((data < current.data)) {
                    current = current.left
                } else {
                    current = current.right
                }
            }
    return false
}

find(data) {
   //??? !!!
}

remove(data) {
    //??? !!!
}

min() {
    let current = this.main;
    while (current.left) {
    current = current.left
    }
    return current.data
}

max() {
    let current = this.main;

    while (current.right) {
        current = current.right;
    }
    return current.data
}
}


module.exports = {
  BinarySearchTree
};