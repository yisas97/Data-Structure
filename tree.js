//Cierto nodos
//     10
//  4     20
// 2 8 17 170

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(value){
        //El primer nodo del arbol
        this.root = null;
    }
    insert(value){
        const current = new Node(value);
        //Si esta vacio
        if(this.root === null){
            this.root = current;
        }else {
            //Ver si ya existe un nodo generamos la ramificacion
            let currentNode = this.root;
            //Se recorre el arbol => por eso la varaible currentNode
            while ( true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = current;
                        return this;
                    }
                    currentNode = currentNode.left;                   
                }else {
                    if(!currentNode.right){
                        currentNode.right = current;
                        return this;
                    }
                    //Si ya existe ese nodo :
                    currentNode = currentNode.right; 
                }
            }
        }
    }
    search(value){
        //Se hace recorrido de todo el nodo
        let currentNode = this.root;
        while(true){
            if (value < currentNode.value){
                currentNode = currentNode.left;
                
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }
            if(!currentNode){
                return false;
            }
            if(currentNode.value === value){
                return currentNode;
            }
            
        }
    }
    delete(value){
        //Si esta vacio que notifique que no se puede hacer
        if(!this.root){
            return "Esta vacio el arbol"
        }
        //Si el valor a eliminar es la raiz entonces que elimine todo
        if (value === this.root.value){
            delete this.root;
            return this;
        }
        //Generamos una variable del root para hacer el recorrido iniciando con la raiz
        let raiz = this.root;
        //Se genera el recorrido
        while(raiz){
            //Buscara su izquierda de la raiz si cumple con el valor
            if(value < raiz.value){
                if(raiz.left && value === raiz.left.value){
                    raiz.left = null;
                    return this;
                }
                //Y si no se cumple entonces regresara otra el recorrido pero ahora el izquierdo de la raiz
                raiz = raiz.left;
            }else {
                if(raiz.right && value === raiz.right.value){
                    raiz.right = null;
                    return this;
                }
                raiz = raiz.right;
            }
        }
    }
}

const mybinary = new BinarySearchTree();
mybinary.insert(10)
mybinary.insert(4)
mybinary.insert(20)
mybinary.insert(2)
mybinary.insert(8)
mybinary.insert(17)
mybinary.insert(170)