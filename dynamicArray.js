class DynamicArray{
    capacity = 0;
    size = 0;
    items = []

    constructor(cap=3){
        this.capacity= cap;
        this.items= new Array(cap).fill(null);
    }

    add(data){
        if(this.size >= this.capacity){
            this.grow()
        }

        this.items[this.size] = data;
        this.size++;
    }

    insert(index,data){
        if(this.size >= this.capacity){
            this.grow()
        }

        for(let i=this.size; i> index;i--){
            this.items[i] =this.items[i-1]
        }
        this.items[index] = data;
        this.size++;
    }

    delete(data){
        for(let i=0;i<this.size;i++){
            if(this.items[i] === data){
                for(let j=i;j<this.size;j++){
                    this.items[j] = this.items[j+1] ?? null;
                }

                this.size --;
                if(this.size <= (Math.ceil(this.capacity/2))){
                    this.shrink()
                }
              
            }
        }
    }

    get(index){
        return this.items[index];
    }

    grow(){
        const newCapacity = this.capacity+3;
        const newItems = new Array(newCapacity).fill(null);

        for(let i=0; i< newItems.length ;i++){
            newItems[i] = this.items[i] ?? null;
        }
        this.items = newItems;
        this.capacity = newCapacity;
    }

    shrink(){
     
        const newCapacity = Math.ceil(this.capacity/2);
        const newItems = new Array(newCapacity).fill(null);
       
        for(let i=0; i< newItems.length ;i++){
            newItems[i] = this.items[i] ?? null;
        }
        this.items = newItems;
        this.capacity = newCapacity;

    }

    toString(){
        let str="";
        for(let i=0;i<this.size;i++){
            str += `${this.items[i]},`;
        }

        if(str !== ""){
            return `[${str.substring(0,str.length-1)}]`
        }else{
            return "[]";
        }
       
    }

    withCapacity(){
        return this.items;
    }

}

class Test{
    constructor(){
        const dynamicArray = new DynamicArray();

        dynamicArray.add("A")
        dynamicArray.add("B")
        dynamicArray.add("C")
        dynamicArray.add("D")
        dynamicArray.add("E")
        dynamicArray.add("F")
        dynamicArray.add("G")
        dynamicArray.add("H")
        dynamicArray.add("I")
   
        // dynamicArray.add("E")
        // dynamicArray.add("F")
        // dynamicArray.add("G")
        // dynamicArray.add("H")
        // dynamicArray.add("E")
        // dynamicArray.insert(2,"X")

        dynamicArray.delete("H")
        dynamicArray.delete("I")
        dynamicArray.delete("G")
        dynamicArray.delete("F")
        dynamicArray.delete("E")
        dynamicArray.delete("D")
        // dynamicArray.delete("C")
        // dynamicArray.delete("B")
        // dynamicArray.delete()
        // console.log(dynamicArray.toString());
        console.log(dynamicArray.withCapacity())
        // console.log(dynamicArray.get(1))
    }
}

const test = new Test()