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

  depthFirst(startingVertex) {
    const result = [];
    const visited = {};
    const dfs = (vertex) => {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(startingVertex);
    return result;
  }

  breadthFirst(startingVertex) {
    let currentVertex;
    const queue = [startingVertex];
    const result = [];
    const visited = {
      [startingVertex]: true
    };

    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
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
