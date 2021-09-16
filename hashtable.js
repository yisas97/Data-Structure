class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  hashMethod(key){
    let hash = 0;
    for (let i = 0 ; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value){
    const address =  this.hashMethod(key);
    //VAlidar si este address ya existe entonces le agregamos el key and value
    //
    if (!this.data[address]){
      this.data[address] = [];

    }
    this.data[address].push([key,value]);
    return this.data;
  }
  get(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket){
      for (let i = 0 ; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key){
          //Los 0 son los key y los 1 son los value
            return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  getAllKey(){
    const allkeys = [];
    this.data.forEach(e => {
      e.forEach(e => {
        allkeys.push(e[0])
      })
    })
    return allkeys;
  }
  getdata(){
    return this.data
  }
  deleteKey(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket){
      delete this.data[address];
      return `Fue borrado  ${currentBucket}`;
    }else {
      return `No fue eliminado`;
    }
  }
}
//De inicio a 50 bucket para el hash
const myhashtable = new HashTable(50);

console.log(myhashtable.set("Jesus",1996));
console.log(myhashtable.set("Yenifer",2003));
console.log(myhashtable.set("Raul", 1976));
console.log(myhashtable.set("Agustin", 1976));
console.log(myhashtable.set("Alicia",1977));
console.log(myhashtable);

//Metodo de get
console.log("El metodo GET en el hash")
console.log(myhashtable.get("Jesus"));
console.log(myhashtable.get("Alicia"));
console.log(myhashtable.get("Yenifer"));

//All keys
console.log("Mostrar todos los keys");
console.log(myhashtable.getAllKey());
console.log(myhashtable.getdata())

//Borrar un elemento
console.log("Eliminar una llave");
console.log(myhashtable.deleteKey("Jesus"));
console.log(myhashtable.getdata())
