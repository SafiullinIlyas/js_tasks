class List {
    #tail;
    #head;
    #size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    getSize() {
        return this.#size;
    }

    append(item) {
        function createNode() {
            return {
                next:null,
                previous:null,
                value:item,
            }
        }

        if (this.getSize() === 0) {
            const node = createNode()

            this.#head = node;
            this.#tail = node;
            this.#size = 1;

            return;
        }

        this.#tail.next = createNode();
        this.#tail.next.previous =  this.#tail;
        this.#tail = this.#tail.next;
        this.#size++;
    }

    has(item) {
        let node = this.#head;
        for (let i = 0; i < this.#size; i++) {
            if (node.value === item)
                return true;
            node = node.next;
        }

        return false
    }

    delete(item) {
        let node = this.#head;

        while(node) {
            if (node.value === item) {
                node.previous.next = node.next;
                return
            }
            node = node.next;
        }
    }

    printAll() {
        let node = this.#head;

        while(node) {
            console.log(node.value)
            node = node.next;
        }
    }


}

const list = new List();

list.append(2)
list.append(1)
list.append(4)
list.append(6)

list.delete(4)
list.printAll()

