import { LinkedList, LinkedListNode } from "./LinkedList";

interface Point {
  x: number;
  y: number;
}

const ll = new LinkedList<Point>([
  { x: 10, y: 10 },
  { x: 20, y: 20 },
  { x: 30, y: 30 },
]);

console.log(ll.search({ x: 20, y: 20 }));
