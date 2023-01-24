import { LinkedList, LinkedListNode } from "./LinkedList";
import { Stack } from "./Stack";

interface Point {
  x: number;
  y: number;
}

// const ll = new LinkedList<Point>([
//   { x: 10, y: 10 },
//   { x: 20, y: 20 },
//   { x: 30, y: 30 },
// ]);

// console.log(ll.search({ x: 20, y: 20 }));

const stack = new Stack<Point>([
  { x: 10, y: 10 },
  { x: 20, y: 20 },
  { x: 30, y: 30 },
]);

stack.push({ x: 99, y: 99 });
stack.push({ x: 105, y: 210 });

console.log(stack.peek());
