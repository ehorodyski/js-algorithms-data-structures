const Node = require('../data-structures/tree-node');

// Big O(V+E)
// Outer loop is V
// Inner loop is E
function depthFirstSearch(tree, value) {
    let stack = [];

    // Push the root node onto the stack.
    stack.push(tree[0]);

    // Loop while the stack is full
    while (stack.length !== 0) {
        for (let i = 0; i < stack.length; i++) {
            var node = stack.pop();
            if (node.value === value) return node;
            if (node.right) stack.push(tree[node.right]);
            if (node.left) stack.push(tree[node.left]);
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

console.log(depthFirstSearch(tree, 7));