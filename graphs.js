/* 
    2 - 0
    /\
    1 - 3  

*/
//Edge List

const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];
// Adjacent List
        //     0     1      2        3
const graph2 = [[[2],[2,3],[0,1,3],[1,2]]];

//HashTable
const graph3 = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2]
}
//Adjacent Matrix

const graph4 = [
    //Array de array , cada fila es un nivel 
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0],
]

const graph5 = {
    //Array de array , cada fila es un nivel 
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0],
}

//CONSTRUYENDO UN GRAFO

class Graph {
    constructor(value){
        this.nodes = 0;
        this.adjacentList = {};
    }

    addVertext(node){
        //Agregamos un nuevo array
        this.adjacentList[node] = [];
        this.nodes++;
    }

    addEdge(node1,node2){
        //Forma de conexion
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

}

const mygraph = new Graph();