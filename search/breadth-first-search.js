const Node = require('../data-structures/tree-node');

// Big O(b^d)
// b = branching factor
// d = distance from start node
function breadthFirstSearch(tree, value) {
    let queue = [];

    // Push the root node onto the queue
    queue.push(tree[0]);

    // Loop while queue is fill
    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
            var node = queue.shift();
            if (node.value === value) return node;
            if (node.left) queue.push(tree[node.left]);
            if (node.right) queue.push(tree[node.right]);
        }
    }
    return null;
}
const tree = [
    new Node(6, 1, 2),
    new Node(5, 3, 4),
    new Node(7, null, 5),
    new Node(3, 6, null),
    new Node(4, null, null),
    new Node(9, 7, 8),
    new Node(2, 9, null),
    new Node(8, null, null),
    new Node(10, null, null),
    new Node(1, null, null)
];

console.log(breadthFirstSearch(tree, 7));