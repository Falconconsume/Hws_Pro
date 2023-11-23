class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    add(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    remove(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                if(current.prev) current.prev.next = current.next;
                if(current.next) current.next.prev = current.prev;
                if(current === this.head) this.head = this.head.next;
                if(current === this.tail) this.tail = this.tail.prev;
                this.size--;
            }
            current = current.next;
        }
    }

    search(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return {
                    value: current.value,
                    prev: current.prev ? current.prev.value : null,
                    next: current.next ? current.next.value : null
                };
            }
            current = current.next;
        }
        return null;
    }

    toArray() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

let list = new DoubleLinkedList();

list.add(12);
list.add(1);
list.add(14);

list.remove(12);
console.log(list.toArray());
console.log(list.getSize());
console.log(list.getHead());
