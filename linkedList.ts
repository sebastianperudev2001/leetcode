class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;

  add(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    // Se obtiene la cabeza actual como el current pointer
    let current = this.head;
    // Luego, se va iterando si es que eiste el atributo next (una instancia del nodo)
    while (current.next) {
      // Se asigna al pointer con el next
      current = current.next;
    }
    current.next = newNode;
  }

  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" --> "));
  }

  insertAtBeggining(value: T): void {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
  }
}

const list = new LinkedList<number>();

list.add(1);
list.add(9);
list.add(199);
list.insertAtBeggining(42);
list.print();
