class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = new Map();
  }

  addVertex(vertex) {
    this.vertices.add(vertex);
    this.edges.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    this.edges.get(vertex1).add(vertex2);
    this.edges.get(vertex2).add(vertex1);
  }
}

const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");

const adjacencyMatrix = myGraph.getAdjacencyMatrix();
console.log(adjacencyMatrix);
