class Queue1 {
    #storage = {}
    #first = 0
    #last = 0

    enqueue(item) {
        this.#storage[this.#last] = item
        this.#last++
    }

    dequeue() {
        if (!this.size()) return null

        const res = this.#storage[this.#first]
        this.#first++
        return res
    }

    size() {
        return this.#last - this.#first
    }
}

class Queue2 {
    #startNode = null
    #lastNode = null
    #size = 0

    enqueue(item) {
        if (this.size() === 0){

            this.#startNode = {
                value:item,
                next:null,
                previos:null,
            }

            this.#lastNode = this.#startNode
            this.#size++
            return
        }

        this.#lastNode.next = {
            value:item,
            next:null,
            previos: this.#lastNode
        }

        this.#lastNode = this.#lastNode.next
        this.#size++
    }

    size(){
        return this.#size
    }

    dequeue(){
        if(!this.size()) return null

        const value = this.#startNode.value
        this.#size--
        this.#startNode = this.#startNode.next
        return value
    }
}

const queue2 = new Queue2()
queue2.enqueue(1)
queue2.enqueue(2)
queue2.enqueue(3)
queue2.enqueue(1)
queue2.enqueue(2)
console.log(queue2.dequeue())
console.log(queue2.dequeue())
console.log(queue2.dequeue())
console.log(queue2.dequeue())
console.log(queue2.dequeue())
console.log(queue2.dequeue())
