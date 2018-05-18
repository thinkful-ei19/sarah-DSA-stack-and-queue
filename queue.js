'use strict';

const Stack = require('./stack');

const stack = new Stack();

class _Node {
  constructor(value, next, prev) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    //create a node with the data that you want to add to the queue
    const node = new _Node(value);

    //if the queue is empty, 
    //make the node the first node on the queue
    if (this.head === null) {
      this.head = node;
    }
    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.tail) {
      node.next = this.tail;
      this.tail.prev = node;
    }
    //make the new node the last item on the queue
    this.tail = node;
  }

  dequeue() {
  //if the queue is empty, there is nothing to return
    if (this.head === null) {
      return;
    }
    //make the first item on the queue to be the 
    //the item that is next on the line 
    // the item after the current first item

    const node = this.head;
    this.head = node.prev;

    //if this is the last item in the queue
    if (node === this.tail) {
      this.tail = null;
    }

    return node.value;
  }

}

function peekQ(queue) {
  let currQueue = queue.head;
  return currQueue.value;
}

//display queue function
function display(queue) {
  let currQueue = queue.head;
  
  if (currQueue === null) {
    throw new Error ('Nothing to display');
  }

  let res = currQueue.value;

  while (currQueue !== queue.tail) {
    currQueue = currQueue.prev;
    res = currQueue.value + ', ' + res;
  }
  return res;
}

//implement queue with 2 stacks
class queueStack {
  constructor() {
    this.s1 = stack;//head
    this.s2 = stack;//tail
  }

  enqueueS(value) {
    this.s1.push(value);
  }
  //dequeue not functional yet...
  dequeueS() {
    let currNode = this.s1.pop();
    console.log(currNode);
    //we need to push from s1 into s2 then pop s2. maybe?
    while (this.s1.top) {
      this.s2.push(currNode);
    }
    return this.s2.pop();
  }
  
}

function main() {
  // let starTrekQ = new Queue();
  // starTrekQ.enqueue('Kirk'); 
  // starTrekQ.enqueue('Spock'); 
  // starTrekQ.enqueue('Uhura'); 
  // starTrekQ.enqueue('Sulu'); 
  // starTrekQ.enqueue('Checkov');
  // // console.log(sortStack(starTrekQ));
  // // console.log(starTrekQ);
  // console.log(peekQ(starTrekQ));
  // console.log(display(starTrekQ));
  // console.log(stack);
  let testQS = new queueStack();
  testQS.enqueueS('hello');
  testQS.enqueueS('bye');
  testQS.enqueueS('what');
  testQS.enqueueS('ok');
  console.log(JSON.stringify(testQS));
  testQS.dequeueS();
  console.log(testQS);
}

main();