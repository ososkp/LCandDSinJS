class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let curr = this.root;
        while (true) {
            if (val === curr.value) return null;
            if (val < curr.value) {
                if (!curr.left) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }

    search(val) {
        let path = "";
        if (!this.root) return null;
        let curr = this.root;
        while(curr) {
            if (val === curr.value) break;
            path += `[${curr.value}]->`;
            if (val < curr.value) {
                path += 'L->'
                curr = curr.left;
            } else {
                path += 'R->'
                curr = curr.right;
            }
        }
        console.log(path);
        return curr;
    }

    dfs() {
        const list = [this.root];
        const result = [];

        const dfsSearch = (stack) => {
            if (!stack.length) return result;
            const popped = stack.unshift();
            if (popped.left) return dfsSearch(stack);
        }

        return dfsSearch(list);
    }

    bfs() {
        const list = [this.root];
        const result = [];
        const bfsSearch = (queue) => {
            if (!queue.length) return result;
            const popped = queue.shift();
            result.push(popped.value);
            if (popped.left) queue.push(popped.left);
            if (popped.right) queue.push(popped.right);
            return bfsSearch(queue);
        }

        return bfsSearch(list);
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);


console.log(bst.dfs());
console.log(bst.bfs());