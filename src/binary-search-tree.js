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
  constructor(){
    this.root = null;
  }


  root() {

  }

  add(data ) {
    const node = new Node(data);
    if(!this.root){
      this.root = node;
      return
    }
    let current  = this.root;

    while(current){
      
      if(node.data  < current.data){
        if(!current.left){
          current.left   = node;
          return;
        }
        current = current.left
      }else{
        if(!current.right){
          current.right =   node;
          return;
        }
        current = current.right
        
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  
}



module.exports = {
  BinarySearchTree
};