'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    //if the top of the stack is empty, then the value will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    const node = new _Node(value, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }

}

// peek: allows you to look at the top of the stack without removing it
function peek(stack) {
  let currNode = stack.top;
  return currNode.value;
}

function display(stack) {
  let currNode = stack.top;
  let res = peek(stack);

  while (currNode.next) {
    currNode = currNode.next;
    res = currNode.value + ', ' + res;
  }
  return res;
}

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(JSON.stringify(starTrek));
  // return starTrek;
  console.log(peek(starTrek));
  console.log(display(starTrek));
}

main();