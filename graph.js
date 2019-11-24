class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((el) => el !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((el) => el !== vertex1);
  }

  removeVertex(vertexToDelete) {
    const updatedAdjacencyList = {};
    for (const currentVertex in this.adjacencyList) {
      if (currentVertex !== vertexToDelete) {
        this.removeEdge(currentVertex, vertexToDelete);
        updatedAdjacencyList[currentVertex] = this.adjacencyList[currentVertex];
      }
    }
    this.adjacencyList = updatedAdjacencyList;
  }
}


const g = new Graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
console.log({init: g});
g.addEdge('a', 'c'); 
g.addEdge('a', 'b'); 
console.log({'after adding edge': g});
g.removeVertex('a');
console.log({'after removing vertex': g});
