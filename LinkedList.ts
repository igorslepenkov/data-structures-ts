export class LinkedListNode<Type> {
  value: Type;
  next: LinkedListNode<Type> | null;

  constructor(value: Type, next: LinkedListNode<Type> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<Type> {
  private head: LinkedListNode<Type> | null = null;
  length: number = 0;

  constructor(nodes?: Type[]) {
    if (nodes) {
      nodes.forEach((node) => this.insert(node));
    }
  }

  private getNext(
    node: LinkedListNode<Type> | null,
    counter: number
  ): LinkedListNode<Type> | null {
    if (counter < 0) {
      return null;
    }

    if (counter === 0 || !node) {
      return node;
    }

    return this.getNext(node.next, counter - 1);
  }

  private getNode(index: number): LinkedListNode<Type> | null {
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

    const newNode = new LinkedListNode<Type>(value);

    const previousNode = this.getNode(position - 1);

    if (!previousNode) {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (previousNode) {
      const currentNode = previousNode.next;

      if (!currentNode) {
        previousNode.next = newNode;
      }

      if (currentNode) {
        newNode.next = currentNode;
        previousNode.next = newNode;
      }
    }

    this.length += 1;
    return newNode.value;
  }

  remove(position: number): Type | null {
    if (position > this.length - 1 || position < 0) {
      throw new Error(`Please choose position from 0 to ${this.length - 1}`);
    }

    const previousNode = this.getNode(position - 1);

    if (!previousNode) {
      const nodeToDelete = this.head;

      if (!nodeToDelete) {
        return null;
      }

      this.length -= 1;
      this.head = nodeToDelete.next;
      return nodeToDelete.value;
    }

    if (previousNode) {
      const nodeToDelete = previousNode.next;

      if (!nodeToDelete) {
        return null;
      }

      this.length -= 1;
      previousNode.next = nodeToDelete.next;
      return nodeToDelete.value;
    }

    return null;
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
