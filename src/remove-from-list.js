const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  let main = l, 
  x = null;
  while( !(l == null) && !(l == undefined) ){
    loop: if(l.value == k ){            
      if(x == null){
      l = l.next;
      main = l;
      if(l){
        break loop;//to the beginning of a certain cycle 
      }
      } else {
      x.next  = l.next ;
      l =  l.next;
      if(l){
        break loop;// to the beginning of a certain cycle 
      }
      }
      }else{
      x = l;
      l = l.next ;
      }}
return main;
}

module.exports = {
  removeKFromList
};
