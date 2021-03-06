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
  
  let res = currNode.value;

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

// Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect.

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

function matchingParens(str) {
  const newStack = new Stack();

  for (let i =0; i < str.length; i++) {
    if (str[i] ==='(') {
      newStack.push({type: str[i], i: `${i}`});
    } else if (str[i] === ')') {
      let comp = newStack.top ? newStack.pop() : null;
   
      if (comp === null || '(' !== comp.type) {
        return `There is an unmatched ')' at position ${i}`;
      }
    }
  }
  console.log(newStack.top);
  return newStack.top ? `There is an unmatched '${newStack.top.value.type}' at postion ${newStack.top.value.i}` : 'parens are matched';
}

// Sort Stack
// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

function sortStack(stack) {
  let newStack = new Stack();
  while (stack.top) {
    let num = stack.pop();
    // console.log(num);
    while(newStack.top && peek(newStack) > num) {
      stack.push(newStack.pop());
      // console.log(stack);
      // console.log(newStack);
    }
    newStack.push(num);
  }
  return display(newStack);
  // return newStack;
}

function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(sortStack(starTrek));
  // // console.log(JSON.stringify(starTrek));
  // // return starTrek;
  // console.log(peek(starTrek));
  // console.log(display(starTrek));
  // console.log(is_palindrome('mom'));
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));
  // console.log(matchingParens('((5 + 3) * 8)'));
  // console.log(matchingParens('((5 + 3) * 8)))))'));
  // console.log(matchingParens('(((((5 + 3) * 8)'));
  let testSort = new Stack();
  testSort.push(1);
  testSort.push(12);
  testSort.push(3);
  testSort.push(77);
  // console.log(testSort);
  console.log(sortStack(testSort));
  
}

main();

module.exports = Stack;