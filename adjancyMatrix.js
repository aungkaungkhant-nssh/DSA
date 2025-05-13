// const numNodes = 1;

// // Initialize empty adjacency matrix
// const adjMatrix = Array.from({ length: numNodes }, () => Array(numNodes).fill(0));
// console.log(adjMatrix)

class Node{
    name;
    constructor(node){
      this.name = node;
    }
}

class Graph {
  nodes = []
  matrix = []
  addNode(node){
    const newNode = new Node(node);
    this.nodes.push(newNode);

    if(this.matrix.length === 0){
      this.matrix.push(Array(1).fill(0));
      return
    }

    const newRow = Array(this.nodes.length-1).fill(0);
    this.matrix.push(newRow);

    for (let row of this.matrix) {
      row.push(0);
    }
  }

  addEdge(src,dict){
    this.matrix[src][dict]=1;
  }

  print(){
    const names = this.nodes.map(node => node.name).join(" ");
    console.log(" ",names);
    for (let i = 0; i < this.nodes.length; i++) {
      let row = this.nodes[i].name + " ";
      for (let j = 0; j < this.matrix[i].length; j++) {
        row += this.matrix[i][j] + " ";
      }
      console.log(row);
    }
  }
}

const graph = new Graph()

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")

graph.addEdge(0,1)
graph.addEdge(1,2)

graph.print()

/** Advantages:
 *
 * - **Fast edge lookup**: O(1) time complexity to check if an edge exists between two vertices.
 * - **Simple implementation**, especially for dense graphs.
 * - **Efficient for dense graphs**, where number of edges is close to V².
 */

/** Disadvantages:
 *
 * - **High space complexity**: O(V²), even if the graph has few edges.
 * - **Inefficient for sparse graphs**, wasting memory on many 0s.
 * - **Slower iteration** over neighbors: O(V) per vertex.
 */