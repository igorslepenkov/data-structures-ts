import { DoubleLinkedList } from "./DoubleLinkedList";
import { LinkedList, LinkedListNode } from "./LinkedList";
import { Queue, QueuePosition } from "./Queue";
import { Stack } from "./Stack";

interface Point {
  x: number;
  y: number;
}

// const ll = new LinkedList<Point>([
//   { x: 10, y: 10 },
//   { x: 20, y: 20 },
//   { x: 30, y: 30 },
//   { x: 40, y: 40 },
//   { x: 50, y: 50 },
//   { x: 60, y: 60 },
// ]);

// ll.insert({ x: 70, y: 70 }, 0);
// ll.remove(0);
// console.log(ll.get(0));

// const stack = new Stack<Point>([
//   { x: 10, y: 10 },
//   { x: 20, y: 20 },
//   { x: 30, y: 30 },
// ]);

// stack.push({ x: 99, y: 99 });
// stack.push({ x: 105, y: 210 });

// console.log(stack.peek());

// const queu = new Queue<Point>([
//   { x: 10, y: 10 },
//   { x: 20, y: 20 },
//   { x: 30, y: 30 },
// ]);

// queu.enqueu({ x: 500, y: 600 });
// console.log(queu.dequeu());
// console.log(queu.dequeu());
// console.log(queu.dequeu());
// console.log(queu.dequeu());
// console.log(queu.peek(QueuePosition.Tail));

// const dll = new DoubleLinkedList<Point>([
//   { x: 10, y: 10 },
//   { x: 20, y: 20 },
//   { x: 30, y: 30 },
//   { x: 40, y: 40 },
//   { x: 50, y: 50 },
//   { x: 60, y: 60 },
// ]);
// console.log(dll.length);
// dll.insert({ x: 70, y: 70 }, 5);
// console.log(dll.get(6));
