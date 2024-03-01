class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let current = this.head;
        let counter = 0;

        while (current) {
            counter++
            current = current.nextNode;
        }
        return counter;
    }
}

const firstNode = new Node(10);
const secondNode = new Node(20);
const thirdNode = new Node(30);

const list = new LinkedList();

list.append(firstNode);
list.prepend(secondNode);
list.append(thirdNode)

console.log(list.size())