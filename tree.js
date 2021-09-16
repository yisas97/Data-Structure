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
}

const mybinary = new BinarySearchTree();