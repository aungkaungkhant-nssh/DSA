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
      this.adjList.set(nodeName,[])
    }

    addEdge(src,dist){
       
        if(this.adjList.has(src)){
        
            this.adjList.set(src,dist)
        }
    }
    print() {
    
        for (let [index, neighbors] of this.adjList.entries()) {
          const nodeName = index;
          const neighborNames = neighbors.map(i => i).join(", ");
          console.log(`${nodeName} → ${neighborNames}`);
        }
    }

    depthFirstSearch(start,visited = new Set()){
        if (visited.has(start)) return;
       console.log(start)
       visited.add(start)
       for(const neighbor of this.adjList.get(start)){
            if (!visited.has(neighbor)) {
                this.depthFirstSearch(neighbor,visited)
            }
       }
    }

    breadthFirstSearch(start){
        const visited= new Set();
        const queue = [start]

        while(queue.length > 0){
            const current = queue.shift();
            if (visited.has(current)) continue;
            visited.add(current)
            console.log(current)
            for(const neighbor of this.adjList.get(current)){
                if(!visited.has(neighbor)){
                    queue.push(neighbor)
                }
              
            }
        }
    }
}


const adjList= new AdjacencyList();

adjList.addNode("A")
adjList.addNode("B")
adjList.addNode("C")
adjList.addNode("D")
adjList.addNode("E")
adjList.addNode("F")

adjList.addEdge("A",["B","C"])
adjList.addEdge("B",["D","E"])
adjList.addEdge("C",["F"])
adjList.addEdge("E",["F"])
// adjList.addEdge(2,[5])
// adjList.addEdge(4,[5])

// adjList.depthFirstSearch("A")
adjList.breadthFirstSearch("A")

// console.log(adjList.print())


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