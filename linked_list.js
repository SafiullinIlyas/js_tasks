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
        const node = {
            next: null,
            previous: null,
            value: item,
        };

        if (this.getSize() === 0) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail.next = node;
            node.previous = this.#tail;
            this.#tail = node;
        }
        this.#size++;
    }

    has(item) {
        let node = this.#head;
        while (node) {
            if (node.value === item) return true;
            node = node.next;
        }
        return false;
    }

    #privateProcessNodeInDeleting(node) {
        if (node.previous) {
            node.previous.next = node.next;
        } else {
            // Удаляется head
            this.#head = node.next;
        }

        if (node.next) {
            node.next.previous = node.previous;
        } else {
            // Удаляется tail
            this.#tail = node.previous;
        }

        this.#size--;

        if (this.#size === 0) {
            this.#head = null;
            this.#tail = null;
        }
    }

    delete(item) {
        let node = this.#head;

        while (node) {
            if (node.value === item) {
                this.#privateProcessNodeInDeleting(node)

                return node;
            }
            node = node.next;
        }

        return null; // Элемент не найден
    }

    deleteByIndex(index) {
        if (index < 0 || index >= this.#size) {
            return null;
        }

        let node = this.#head;
        let i = 0;

        while (node) {
            if (i === index) {
                this.#privateProcessNodeInDeleting(node)

                return node;
            }
            node = node.next;
            i++;
        }

        return null;
    }

    printAll() {
        let node = this.#head;

        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

class Queue {
    constructor() {
        this.list = new List();
    }

    enqueue(el) {
        this.list.append(el);
    }

    dequeue() {
        const node = this.list.deleteByIndex(0);
        return node ? node.value : null;
    }

    getSize() {
        return this.list.getSize();
    }

    has(el) {
        return this.list.has(el);
    }

    printQueue() {
        this.list.printAll();
    }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(1);
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.printQueue();
