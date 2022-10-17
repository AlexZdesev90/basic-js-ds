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

find(data) {//find leaf
let current = this.main
while(current.data !== data){
    if(data < current.data){
        current = current.left;
        //return true
    }
    
    else{
        current = current.right;
        //return false
    }
    

    if(current === null){
        return null;
    }
}
return current;
}

remove(data) {
    
    let nodeRemove = (node, data) => {
        if(node == null){
            return null
        }
        if(data == node.data)  {


        if(node.left == null && node.right == null){
            return null
        }
        
        if(node.left == null){

            return node.right
        }
        if(node.right == null){
        
            return node.left
        }

        let nodeTemp = node.right;//temporary
        while(nodeTemp.left !== null ){
            nodeTemp = nodeTemp.left
        }
        node.data = nodeTemp.data
        node.right = nodeRemove(node.right, nodeTemp.data);
        return node
    }else if(data < node.data){
        node.left = nodeRemove(node.left, data);
        return node 
    }else{
        node.right = nodeRemove(node.right, data);
        // return nodeTemp;
        return node;
    }

    }

    this.main = nodeRemove(this.main, data)
    // return this.main
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