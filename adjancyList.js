class Node {
    name;
    constructor(name){
        this.name = name;
    }
}

class AdjacencyList{
    nodes = [];
    adjList = new Map();

    addNode(nodeName){
      const node =  new Node(nodeName);
      this.nodes.push(node)
      this.adjList.set(this.nodes.length-1,[])
    }

    addEdge(src,dist){
        if(this.adjList.has(src)){
            this.adjList.get(src).push(dist);
        }
    }
    print() {
        for (let [index, neighbors] of this.adjList.entries()) {
          const nodeName = this.nodes[index].name;
          const neighborNames = neighbors.map(i => this.nodes[i].name).join(", ");
          console.log(`${nodeName} → ${neighborNames}`);
        }
    }
}


const adjList= new AdjacencyList();

adjList.addNode("A")
adjList.addNode("B")
adjList.addNode("C")


adjList.addEdge(0,[1,2])

adjList.print()


/** Advantages:
 *
 * - **Efficient space usage**: O(V + E), suitable for sparse graphs.
 * - **Fast iteration** over neighbors: Only traverses existing edges.
 * - **More memory-efficient** than adjacency matrix for large sparse graphs.
 */

/** Disadvantages:
 *
 * - **Slower edge lookup**: O(degree) time to check for an edge.
 * - **Slightly more complex** to implement than a matrix.
 * - **Not ideal for dense graphs**, as list size can grow large.
 */