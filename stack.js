class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack {
  //No vamos a iniciarlo , en vez de eso usaremos el push
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek(){
    return  this.top;
  }
  push(value){
    const current = new Node(value);
    if (this.length === 0){
      this.top = current;
      this.bottom = current;

    }else {
      const holdingPointer = this.top;
      this.top = current;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length === 0){
      console.log("Error, el stack no tiene elementos");
      return this;
    }else if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length--;
      return this;
    }else {
      //Null => en el top en el next => null y lo borramos
      this.top = this.top.next;
      this.length--;
      return this;
      
    }
  }

}

const myStack = new Stack();
