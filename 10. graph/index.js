class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdges(vertex, edge) {
    if (!this.adjacencyList[vertex]) {
      this.addVertex(vertex);
    }
    if (!this.adjacencyList[edge]) {
      this.addVertex(edge);
    }
    this.adjacencyList[vertex].add(edge);
    this.adjacencyList[edge].add(vertex);
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex, '->', this.adjacencyList[vertex]);
    }
  }

  hasEdge(vertex, edge) {
    return (
      this.adjacencyList[vertex].has(edge) &&
      this.adjacencyList[edge].has(vertex)
    );
  }

  removeEdge(vertex, edge) {
    this.adjacencyList[vertex].delete(edge);
    this.adjacencyList[edge].delete(vertex);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (const adjacentVertex in this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
