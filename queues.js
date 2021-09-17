class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }


}

class Queues {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;
  }
  //Agregar un elemento al final de la linea
  enqueue(value){
    const current = new Node(value);
    if (this.length === 0){
      this.first = current;
      this.last = current;
      this.length++;
      return this;
    }else{
      //const holdingPointer = this.last;
      //this.last = current;
      //this.last.next = holdingPointer;
      this.last.next = current;
      this.last =current;
      this.length++;
      return this;
    }
  }
  //Eliminar o remover el primer elemento de la linea
  dequeue(){
    if(this.length === 0){
      return  null;
    }
    if(this.length === 1){
      this.last = null;
      this.first = null;
      return this;
    }

    const deleteFirst = this.first.next;
    this.first = deleteFirst;

    this.length--;
    return this;
  }
}

const myqueues = new Queues();
