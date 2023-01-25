import { DoubleLinkedListNode } from "./DoubleLinkedList";
import { QueuePosition } from "./Queue";

export class Dequeue<Type> {
  length: number = 0;
  private head: DoubleLinkedListNode<Type> | null = null;
  private tail: DoubleLinkedListNode<Type> | null = null;

  constructor(nodes?: Type[]) {
    if (nodes) {
      nodes.forEach((node) => this.enqueu(node, QueuePosition.Tail));
    }
  }

  enqueu(node: Type, position: QueuePosition): Type {
    const enqueuedNode = new DoubleLinkedListNode(node);
    this.length += 1;

    if (!this.head || !this.tail) {
      this.head = enqueuedNode;
      this.tail = enqueuedNode;

      return enqueuedNode.value;
    }

    if (position === QueuePosition.Head) {
      enqueuedNode.next = this.head;
      this.head = enqueuedNode;
    }

    if (position === QueuePosition.Tail) {
      this.tail.next = enqueuedNode;
      this.tail = enqueuedNode;
    }

    return enqueuedNode.value;
  }

  dequeue(position: QueuePosition): Type | null {
    if (!this.head || !this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const dequeuedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return dequeuedNode.value;
    }

    if (position === QueuePosition.Head) {
      const dequeuedNode = this.head;

      this.head = this.head.next;
      this.length -= 1;
      return dequeuedNode.value;
    }

    if (position === QueuePosition.Tail) {
      const dequeuedNode = this.tail;

      this.tail = this.tail.previous;
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
