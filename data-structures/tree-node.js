module.exports = class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}