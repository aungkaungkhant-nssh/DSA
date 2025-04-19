class LinearSearch{
    constructor(array){
        this.array = array;
    }
    search(target){
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                return i;
            }
        }
        return -1;
    }
    searchAll(target){
        let indices = [];
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                indices.push(i);
            }
        }
        return indices;
    }
    searchFirst(target){
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                return i;
            }
        }
        return -1;
    }
    searchLast(target){
        for(let i = this.array.length - 1; i >= 0; i--){
            if(this.array[i] === target){
                return i;
            }
        }
        return -1;
    }
    searchIndex(target){
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                return i;
            }
        }
        return -1;
    }
    searchAllIndex(target){
        let indices = [];
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                indices.push(i);
            }
        }
        return indices;
    }
    searchFirstIndex(target){
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === target){
                return i;
            }
        }
        return -1;
    }   
}


class Test {
  
    constructor(array){
        const linearSearch = new LinearSearch(array);
        console.log(linearSearch.search(3));
    }
}


const test = new Test([1, 2, 3, 4, 5]);


// ** note ** //
// run time complexity of linear search is O(n) in the worst case and O(1) in the best case
// space complexity is O(1) because it does not use any extra space

// ** Disadvantages ** //
// 1. Linear search is not efficient for large data sets.
// 2. It is not suitable for searching in sorted arrays.

// ** Advantages ** //
// 1. Linear search is simple to implement and understand.
// 2. does not require any additional data structures or sorting.
