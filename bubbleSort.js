class BubbleSort{
    constructor(arr) {
        this.arr = arr;
    }

    sort(){
        const arrLength = this.arr.length;
        for(let i=0;i<arrLength-1;i++){
            for(let j=0;j<arrLength-i-1;j++){
                let first = this.arr[j];
                let second = this.arr[j+1];
                let temp;
                
                if(first < second){
                    temp= first;
                    first = second;
                    second = temp;
                }
    
                this.arr[j] = first;
                this.arr[j+1] = second;
            }
        }
        console.log(this.arr)

    }
}

class Test{
    constructor(){
        const arr = [9,1,8,2,7,3,6,4,5]
        const bubbleSort = new BubbleSort(arr);
        bubbleSort.sort();
     
    }

}

const test = new Test();


/// note
// Bubble sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent items, and swaps them if they are in the wrong order.

// How it works:
// Compare the first and second elements.

// If the first is greater than the second, swap them.

// Move to the next pair and repeat until the end of the list.

// Then repeat the whole process for the entire list, but each time you can stop one element earlier (because the largest elements "bubble up" to the end).