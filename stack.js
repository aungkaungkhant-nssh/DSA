class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    empty(){
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push("Book1")
stack.push("Book2")
stack.push("Book3")

stack.pop()

console.log(stack)