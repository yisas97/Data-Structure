class Node{
    constructor(value){
        this.value = value
        this.edges = []
    }
}
        
class Edge{
    constructor(nodeFrom, nodeTo){
        this.nodeFrom = nodeFrom
        this.nodeTo = nodeTo
    }
}

class Graph{
    constructor(nodes = [], edges = []){
        //Nodo
        this.nodes = nodes
        //Conexion
        this.edges = edges
    }
    insertNode(value){
        //Insertar valores al grafo
        this.nodes.push(new Node(value))
    }
    insertEdge(fromValue, toValue){
        //Generar la relacion a cada uno de los vertices
        let fromFound = null
        let toFound = null
        //Recorrido al array de nodos
        this.nodes.forEach(node=>{
            if(fromValue === node.value){
                fromFound = node
            }
            if(toValue === node.value){
                toFound = node
            }
        })
        //Si no existe uno de los nodos lo agregamos
        if(!fromFound){
            fromFound = new Node(fromValue)
            this.nodes.push(fromFound)
        }
        if(!toFound){
            toFound = new Node(toValue)
            this.nodes.push(toFound)
        }
        const newEdge = new Edge(fromFound, toFound)
        //Genera conexion entre los dos nodos
        fromFound.edges.push(newEdge)
        toFound.edges.push(newEdge)
        this.edges.push(newEdge)
    }
    getEdgeList(){
        //MEtodo Edge List
        const edgeList = []
        //La lista de las conexiones
        for(let edge of this.edges){
            edgeList.push([edge.nodeFrom.value, edge.nodeTo.value])
        }
        //Muestra el array de las conexiones
        return edgeList
    }
    getAdjacencyList(){
        //Metodo Adjacent List
        const maxIndex = this.edges.length
        // Crea una lista con  maxIndex +1 elements, all null
        const adjacencyList = Array.from(new Array(maxIndex+1), x => null)

        for(let edge of this.edges){
            if(adjacencyList[edge.nodeFrom.value]){
                adjacencyList[edge.nodeFrom.value].push(edge.nodeTo.value)
            }
            else{
                adjacencyList[edge.nodeFrom.value] = [edge.nodeTo.value]
            }
        }
        return adjacencyList
    }
    getAdjacencyMatrix(){
        //Metodo Adjacency Matrix
        const len = this.nodes.length + 1
        //Create a matrix of dimensions len x len, filled with zeros 
        const adjacencyMatrix = Array.from(new Array(len), x => new Array(len).fill(0))
        for(let edge of this.edges){
            adjacencyMatrix[edge.nodeFrom.value][edge.nodeTo.value] = 1
        }
        return adjacencyMatrix
    }
}
const graph = new Graph()
graph.insertEdge(1,2)
graph.insertEdge(1,3)
graph.insertEdge(1,4)
graph.insertEdge(3,4)

// Deberia mostrar [[1, 2], [1, 3], [1, 4], [3, 4]]
console.log(graph.getEdgeList())
// Deberia mostrar [ null, [ 2, 3, 4 ], null, [ 4 ], null ]
console.log(graph.getAdjacencyList())
// Deberia Mostrar [[0,0,0,0,0],[0,0,1,1,1],[0,0,0,0,0],[0,0,0,0,1],[0,0,0,0,0]]
console.log(graph.getAdjacencyMatrix())