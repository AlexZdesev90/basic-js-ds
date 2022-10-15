const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  
    constructor() {
      this.start = null;
      this.finish = null;

      this.capacity = 0;
    }
  
    getUnderlyingList(){
        // console.log(this)
    return this.start;
    }
    empty() {
    return this.capacity === 0;
    }
  
    enqueue(el) {

    const node = new ListNode(el);
  



    if (this.empty()) {
    this.start = node;
    this.finish = node;
    }
    else {
        // debugger;
    this.finish.next = node;
    this.finish = node;
}

    this.capacity+=1;
    //   console.log(this.capacity)
    return this ;
    }
  
    dequeue() {
    if (this.empty()) return null;
    const remove = this.start;
    //   console.log(remove)

    if (this.start === this.finish) {
    this.finish = null;
}
    this.start = this.start.next;

    this.capacity-=1;
      //   console.log(this.capacity)

    return remove;

}

  
}

module.exports = {
  Queue
};
