import { LinkedListNode } from "./LinkedList";

export enum QueuePosition {
  Head = "head",
  Tail = "tail",
}

export class Queue<Type> {
  length: number = 0;
  private head: LinkedListNode<Type> | null = null;
  private tail: LinkedListNode<Type> | null = null;

  constructor(nodes?: Type[]) {
    if (nodes) {
      nodes.forEach((node) => this.enqueu(node));
    }
  }

  enqueu(node: Type): Type {
    const enqueuedNode = new LinkedListNode(node);
    this.length += 1;

    if (!this.head || !this.tail) {
      this.head = enqueuedNode;
      this.tail = enqueuedNode;

      return enqueuedNode.value;
    }

    this.tail.next = enqueuedNode;
    this.tail = enqueuedNode;

    return enqueuedNode.value;
  }

  dequeue(): Type | null {
    if (this.head) {
      const dequeuedNode = this.head;

      if (this.tail === dequeuedNode) {
        this.tail = null;
      }

      this.head = this.head.next;
      this.length -= 1;
      return dequeuedNode.value;
    }

    return null;
  }

  peek(position: QueuePosition): Type | null {
    if (position === QueuePosition.Head && this.head) {
      return this.head.value;
    }

    if (position === QueuePosition.Tail && this.tail) {
      return this.tail.value;
    }

    return null;
  }
}
