class Node{
    constructor(value){
        this.value =value;
        this.next = null;
    }
}

class Queue{
   constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
   }

   enqueue(value){
    const node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail= node;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.size ++;
   }

   dequeue(){
    if(!this.head) return;
    const value = this.head.value;
    if(this.head) this.tail = null;
    this.head = this.head.next;
    this.size++;
    return value;
   }

   peek(){
    console.log(this.head.value)
   }
}

const queue = new Queue();
queue.enqueue("Book1")
queue.enqueue("Book2")
queue.enqueue("Book3")

queue.dequeue()


console.log(queue.peek())