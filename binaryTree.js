class BinaryTree {
    #root = null;

    add(item) {
        if (!this.#root) {
            this.#root = createNode();
            return;
        }

        addNodeRec(this.#root);

        function createNode() {
            return {
                value: item,
                left: null,
                right: null,
            };
        }

        function addNodeRec(node) {
            if (item < node.value) {

                if (node.left) {
                    addNodeRec(node.left);
                } else {
                    node.left = createNode();
                }
            } else {

                if (node.right) {
                    addNodeRec(node.right);
                } else {
                    node.right = createNode();
                }
            }
        }
    }

    has(item) {
        return hasRec(this.#root);

        function hasRec(node) {
            if (!node) return false;

            if (node.value === item) {
                return true;
            }

            if (item < node.value) {

                return hasRec(node.left);
            } else {

                return hasRec(node.right);
            }
        }
    }
}


const bT = new BinaryTree();

bT.add(10);
bT.add(15);
bT.add(32);

