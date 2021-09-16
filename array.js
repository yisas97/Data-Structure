class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  unshift(item) {
    //this.length++;
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    //Se agrega el item en la posicion 0
    this.data[0] = item;
    this.length++;
    return this.data;
  }
  shift() {
    this.delete(0);
  }

  pop() {
    //Guarda el ultimo elemento
    const lastitem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }
  //Eliminar un item
  delete(index) {
    const item = this.data[index];
    //Se reacomoda
    this.shiftIndex(index);

    return item;
  }
  //Creo una funcion que genere los cambios
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      //
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myarray = new MyArray();
myarray.push("Jesus");
myarray.push("Franco");
myarray.push("Raul");
console.log(myarray);
myarray.push("Jean Paul");
console.log(myarray);
console.log(myarray.get(1));
//Pop
console.log("Utilizar la  funcion pop");
console.log(myarray.pop());
console.log(myarray);
//Delete
console.log("Utilizar delete");
myarray.delete(1);
console.log(myarray);
//unshit
console.log("Utilizar unshift");
myarray.unshift("Francisco");
console.log(myarray);
//shift => eliminar el primer elemento
console.log("Utilizar shift");
myarray.shift();
console.log(myarray);
