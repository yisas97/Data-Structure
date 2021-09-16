class  Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    //Tener dos direcciones
    const current = new Node(value);

    current.prev = this.tail;

    this.tail.next = current;
    this.tail = current;
    this.length++;

    return this;
  }
  prepend(value){
    const current = new Node(value);
    this.head.prev = current;
    current.next = this.head;
    this.head = current;
    this.length++;
    return this;
  }

  insert(value,index){
    if (index <= 0){
      return this.prepend(value);
    }

    const current  = new Node(value);
    const firstPointer = this.getTheIndex(index-1);
    const holdingPointer = firstPointer.next;

    firstPointer.next = current;
    current.prev = firstPointer;
    current.next = holdingPointer;
    holdingPointer.prev = current;
    this.length++;
    return this;


  }
  getTheIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
      if (index> 0 && index < this.length){
      const firstPointer = this.getTheIndex(index-1);
      const nextPointer = this.getTheIndex(index+1);

      firstPointer.next = nextPointer;
      nextPointer.prev = firstPointer;
      this.length--;

      return  this;
    }
  }
}

let mydoublylinkedlist = new MyDoublyLinkedList(1);
mydoublylinkedlist.append(2);
mydoublylinkedlist.append(3);
mydoublylinkedlist.append(4);
console.log(mydoublylinkedlist)
console.log("El metodo Prepend");
console.log(mydoublylinkedlist.prepend(0));
console.log("------------------------------");
console.log("Insertar un elemento en doubly");
console.log(mydoublylinkedlist.insert(6,1));
console.log("--------------------------------");
console.log(mydoublylinkedlist.remove(3));
