class SelectionSort{
    constructor(arr){
        this.arr= arr;
    }


    sort(){
        const arrLength = this.arr.length;
        for(let i=0;i<arrLength-1;i++){
            let minIndex = i;

            // Find the index of the minimum element
            for(let j=i+1;j<arrLength;j++){
                if(this.arr[j] < this.arr[minIndex]){
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            if(minIndex !== i){
                let temp = this.arr[i];
                this.arr[i] = this.arr[minIndex];
                this.arr[minIndex] = temp;
            }
        }
   

    }
   
}

class Test{
    constructor(){
        const arr = [9,1,8]
        const selectionSort = new SelectionSort(arr);
        selectionSort.sort()
    }
}

const test= new Test()


//note 
//It repeatedly finds the smallest (or largest) element from the unsorted part of the list.
//Then it swaps it with the first unsorted element.