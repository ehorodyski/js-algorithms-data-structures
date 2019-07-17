module.exports = class Graph {
    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(fromVertex, toVertex) {
        this.adjacencyList.get(fromVertex).push(toVertex);
        this.adjacencyList.get(toVertex).push(fromVertex);
    }

    printGraph() {
        let keys = this.adjacencyList.keys();
        for (let key of keys) {
            let values = this.adjacencyList.get(key);
            let str = '';

            for (let value of values)
                str += `${value} `;
            console.log(`${key} -> ${str}`);
        }
    }
}

