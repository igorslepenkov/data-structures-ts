import { LinkedListNode } from "./LinkedList";

export class Stack<Type> {
  length: number = 0;
  head: LinkedListNode<Type> | null = null;

  constructor(nodes?: Type[]) {
    if (nodes) {
      nodes.forEach((node) => this.push(node));
    }
  }

  push(node: Type): LinkedListNode<Type> {
    const newNode = new LinkedListNode(node);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return newNode;
  }

  pop(): LinkedListNode<Type> | null {
    if (this.head) {
      const node = this.head;
      this.head = this.head.next;
      this.length -= 1;

      return node;
    }

    return null;
  }

  peek(): LinkedListNode<Type> | null {
    if (this.head) {
      return this.head;
    }

    return this.head;
  }
}
