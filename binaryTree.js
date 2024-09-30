class BinaryTree {
    #root = null;

    add(item) {
        if (!this.#root) {
            this.#root = createNode()
            return
        }

        addNodeRec(this.#root)

        function createNode() {
            return {
                value: item,
                left: null,
                right: null,
            }
        }

        function addNodeRec(node) {
            if (node.value > item) {

                if (node.right) {
                    addNodeRec(node.right)
                }

                else {
                    node.right = createNode();
                }

            }
            else {
                if (node.left) {
                    addNodeRec(node.left)
                }

                else {
                    node.left = createNode();
                }
            }
        }
    }

    has(item) {
        return hasRec(this.#root)

        function hasRec(node) {
            if (node.value === item) {
                return true;
            }

            else if (node.value > item) {

                if (node.right) {
                    return hasRec(node.right)
                }
                return false

            }
            else {
                if (node.left) {
                    return hasRec(node.left)
                }
                return false
            }
        }
    }
}

const bT = new BinaryTree()

bT.add(10)
bT.add(15)
bT.add(32)
console.log(bT.has(32))