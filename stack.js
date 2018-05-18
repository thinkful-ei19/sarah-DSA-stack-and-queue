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

  if (currNode === null) {
    throw new Error ('Nothing to display');
  }
  let res = peek(stack);

  while (currNode.next) {
    currNode = currNode.next;
    res = currNode.value + ', ' + res;
  }
  return res;
}

// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let newStack = new Stack;
  for (let i = 0; i < s.length; i++) {
    newStack.push(s[i]);
  }
  for (let i = 0; s.length/2; i++) {
    if (newStack.pop() !== s[i]) {
      return false;
    }
    return true;
  }
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
  console.log(is_palindrome('mom'));
  console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
}

main();