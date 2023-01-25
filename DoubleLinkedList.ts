export class DoubleLinkedListNode<Type> {
  value: Type;
  next: DoubleLinkedListNode<Type> | null;
  previous: DoubleLinkedListNode<Type> | null;

  constructor(
    value: Type,
    next: DoubleLinkedListNode<Type> | null = null,
    previous: DoubleLinkedListNode<Type> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

export class DoubleLinkedList<Type> {
  private head: DoubleLinkedListNode<Type> | null = null;
  length: number = 0;

  constructor(nodes?: Type[]) {
    if (nodes) {
      nodes.forEach((node) => this.insert(node));
    }
  }

  private getNext(
    node: DoubleLinkedListNode<Type> | null,
    counter: number
  ): DoubleLinkedListNode<Type> | null {
    if (counter < 0) {
      return null;
    }

    if (counter === 0 || !node) {
      return node;
    }

    return this.getNext(node.next, counter - 1);
  }

  private getNode(index: number): DoubleLinkedListNode<Type> | null {
    return this.getNext(this.head, index);
  }

  isEmpty() {
    return this.length === 0;
  }

  get(index: number): Type | null {
    const result = this.getNext(this.head, index);
    if (result) return result.value;

    return null;
  }

  insert(value: Type, position: number = this.length): Type {
    if (position > this.length || position < 0) {
      throw new Error(`Please choose position from 0 to ${this.length}`);
    }
    const newNode = new DoubleLinkedListNode<Type>(value);

    const previousNode = this.getNode(position - 1);

    if (!previousNode) {
      if (this.head) {
        newNode.next = this.head;
        newNode.next.previous = newNode;
        this.head = newNode;
      }

      if (!this.head) {
        newNode.next = this.head;
        this.head = newNode;
      }
    }

    if (previousNode) {
      const currentNode = previousNode.next;

      if (!currentNode) {
        previousNode.next = newNode;
        newNode.previous = previousNode;
      }

      if (currentNode) {
        newNode.next = currentNode;
        currentNode.previous = newNode;

        previousNode.next = newNode;
        newNode.previous = previousNode;
      }
    }

    this.length += 1;
    return newNode.value;
  }

  remove(position: number): Type | null {
    if (position > this.length - 1 || position < 0) {
      throw new Error(`Please choose position from 0 to ${this.length - 1}`);
    }

    const nodeToDelete = this.getNode(position);

    if (!nodeToDelete) {
      return null;
    }

    const previousNode = nodeToDelete.previous;
    const nextNode = nodeToDelete.next;

    if (!previousNode) {
      this.head = nextNode;
    }

    if (previousNode && nextNode) {
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }

    if (previousNode && !nextNode) {
      previousNode.next = nextNode;
    }

    this.length -= 1;
    return nodeToDelete.value;
  }

  search(value: Type): { index: number; value: Type } | null {
    let counter = 0;
    while (counter < this.length) {
      const currentNode = this.getNode(counter);

      if (!currentNode) {
        return null;
      }

      if (JSON.stringify(currentNode.value) === JSON.stringify(value)) {
        return { index: counter, value: currentNode.value };
      }

      counter += 1;
    }

    return null;
  }
}
