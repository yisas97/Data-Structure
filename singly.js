// 1 -> 2 -> 3 -> 4 -> 5 --> null 
// debemos tener al final un null para agregar datos
//
// Nos regresa un tipo objeto
//let singlyLinkdList = 
//  head: {
//    value: 1,
//    next: {
//      value: 2,
//      next: {
//        value : 3,
//        next:{
//          value: 4,
//          next: null
//        }
//      }
//    }
//  }

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class MySinglyLinKedList {
  //Se genera con un valor 
  constructor(value){
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  checknode(node){
    if (!node.next){
      return node;
    }
    return this.checknode(node.next);
  }

  //Problema es que solo actualiza ese primer next 
  //Tenemos que crear otro next
  append(value){
    //Recibir el valor del nodo
    let current = new Node(value);
    //Creamos que vaya al siguiente next creado
    const lastNode = this.checknode(this.head);
    lastNode.next = current
    //Cambiamos el valor next del head
    this.tail = current;
    this.length++;
    return this.head;
  }

  prepend(value){
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
    this.length++;
    return this.head;
  }
  insert(value, index){
    if (index === 0){
      return this.prepend(value);
    }
    if (index === this.length -1){
      return this.append(value);
    }
    //const current = new Node(value);
    //let auxcurrent = this.head;
    //for (let i = 0 ; i < index -1  ; i++){
    //  auxcurrent = auxcurrent.next;
    //}
    //current.next = auxcurrent.next;
    //auxcurrent.next = current;
    //this.length++;
    //return this;
    const current = new Node(value);
    const firstPointer = this.getTheIndex(index- 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = current;
    current.next = holdingPointer;
    this.length++;
    return  this;
  }
  getTheIndex(index){
    let counter = 0;
    let currentNode = this.head;
    
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    if (index> 0 && index < this.length){
      const firstPointer = this.getTheIndex(index -1);
      const nextPointer = this.getTheIndex(index+1);

      firstPointer.next = nextPointer;
      this.length--;
      return this;
    }
    if( index  === 0 ){
      const nextPointer = this.getTheIndex(index+1);
      this.head = nextPointer;
      this.length--;
      return this;
    }
    if (index >= this.length ){
      return "error"
    }
  }

}

let myLinkedList = new MySinglyLinKedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(4,1));
console.log(myLinkedList.remove(3));
