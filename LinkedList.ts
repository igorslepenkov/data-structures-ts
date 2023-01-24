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

  isEmpty() {
    return this.length === 0;
  }

  private getNode(index: number): LinkedListNode<Type> | null {
    return this.getNext(this.head, index);
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
    const currentNode = this.getNode(position);
    const previousNode = this.getNode(position - 1);

    if (!previousNode) {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (!currentNode && previousNode) {
      previousNode.next = newNode;
    }

    if (currentNode && previousNode) {
      previousNode.next = newNode;
      newNode.next = currentNode;
    }

    this.length += 1;
    return newNode.value;
  }

  remove(position: number): Type | null {
    if (position > this.length - 1 || position < 0) {
      throw new Error(`Please choose position from 0 to ${this.length - 1}`);
    }

    const nodeToDelete = this.getNode(position);
    const previousNode = this.getNode(position - 1);

    if (!nodeToDelete) {
      return null;
    }

    if (!previousNode) {
      this.head = nodeToDelete.next;
      return nodeToDelete.value;
    }

    previousNode.next = nodeToDelete.next;
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
